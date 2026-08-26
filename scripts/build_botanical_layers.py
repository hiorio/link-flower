"""Split the generated botanical specimen into lightweight animation layers."""

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path

import cv2
import numpy as np
from PIL import Image


CANVAS_WIDTH = 1024
CANVAS_HEIGHT = 1536
CENTER_X = 512
CENTER_Y = 455


def smooth_mask(mask: np.ndarray, sigma: float = 0.65) -> np.ndarray:
    softened = cv2.GaussianBlur((mask.astype(np.uint8) * 255), (0, 0), sigma)
    return softened


def save_layer(
    rgba: np.ndarray,
    mask: np.ndarray,
    output_dir: Path,
    filename: str,
    padding: int = 8,
) -> dict[str, float | str]:
    alpha = rgba[:, :, 3].astype(np.uint16)
    layer = rgba.copy()
    layer[:, :, 3] = ((alpha * smooth_mask(mask).astype(np.uint16)) // 255).astype(np.uint8)

    visible = layer[:, :, 3] > 1
    ys, xs = np.where(visible)
    if not len(xs):
        raise ValueError(f"Layer {filename} has no visible pixels")

    left = max(int(xs.min()) - padding, 0)
    top = max(int(ys.min()) - padding, 0)
    right = min(int(xs.max()) + padding + 1, CANVAS_WIDTH)
    bottom = min(int(ys.max()) + padding + 1, CANVAS_HEIGHT)
    crop = Image.fromarray(layer[top:bottom, left:right], "RGBA")
    crop.save(output_dir / filename, "WEBP", quality=92, method=6, exact=True)

    width = right - left
    height = bottom - top
    return {
        "src": f"botanical/{filename}",
        "x": round(left / CANVAS_WIDTH * 100, 4),
        "y": round(top / CANVAS_HEIGHT * 100, 4),
        "width": round(width / CANVAS_WIDTH * 100, 4),
        "height": round(height / CANVAS_HEIGHT * 100, 4),
        "originX": round((CENTER_X - left) / width * 100, 3),
        "originY": round((CENTER_Y - top) / height * 100, 3),
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output_dir", type=Path)
    args = parser.parse_args()

    args.output_dir.mkdir(parents=True, exist_ok=True)
    rgba = np.array(Image.open(args.source).convert("RGBA"))
    if rgba.shape[:2] != (CANVAS_HEIGHT, CANVAS_WIDTH):
        raise ValueError(f"Expected {CANVAS_WIDTH}x{CANVAS_HEIGHT}, got {rgba.shape[1]}x{rgba.shape[0]}")

    yy, xx = np.ogrid[:CANVAS_HEIGHT, :CANVAS_WIDTH]
    luminance = rgba[:, :, :3].mean(axis=2)
    radius_sq = (xx - CENTER_X) ** 2 + (yy - CENTER_Y) ** 2

    petal_seed = (
        (rgba[:, :, 3] > 64)
        & (luminance > 140)
        & (yy < 820)
        & (radius_sq > 70**2)
    ).astype(np.uint8)

    component_count, labels, stats, centroids = cv2.connectedComponentsWithStats(petal_seed, 8)
    petal_components: list[tuple[int, np.ndarray, tuple[float, float]]] = []
    for label in range(1, component_count):
        area = int(stats[label, cv2.CC_STAT_AREA])
        if area < 10_000:
            continue
        component = (labels == label).astype(np.uint8)
        contours, _ = cv2.findContours(component, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        filled = np.zeros_like(component)
        cv2.drawContours(filled, contours, -1, 1, cv2.FILLED)
        filled = cv2.dilate(filled, np.ones((3, 3), np.uint8), iterations=1)
        petal_components.append((area, filled, tuple(centroids[label])))

    if len(petal_components) != 7:
        raise ValueError(f"Expected 7 petals, found {len(petal_components)}")

    def petal_angle(item: tuple[int, np.ndarray, tuple[float, float]]) -> float:
        _, _, (centroid_x, centroid_y) = item
        return math.degrees(math.atan2(centroid_y - CENTER_Y, centroid_x - CENTER_X))

    petal_components.sort(key=petal_angle)
    petals = []
    petal_union = np.zeros((CANVAS_HEIGHT, CANVAS_WIDTH), dtype=np.uint8)
    for index, (area, mask, centroid) in enumerate(petal_components, start=1):
        angle = round(petal_angle((area, mask, centroid)), 2)
        metadata = save_layer(rgba, mask, args.output_dir, f"petal-{index:02d}.webp")
        metadata.update({"angle": angle, "inverseAngle": -angle})
        petals.append(metadata)
        petal_union = np.maximum(petal_union, mask)

    center_mask = radius_sq <= 82**2
    center = save_layer(rgba, center_mask.astype(np.uint8), args.output_dir, "center.webp", padding=5)

    stem_seed = (
        (rgba[:, :, 3] > 128)
        & (yy > 625)
        & (petal_union == 0)
        & (radius_sq > 82**2)
    ).astype(np.uint8)
    stem_count, stem_labels, stem_stats, _ = cv2.connectedComponentsWithStats(stem_seed, 8)
    stem_label = max(range(1, stem_count), key=lambda item: int(stem_stats[item, cv2.CC_STAT_AREA]))
    stem_mask = (stem_labels == stem_label).astype(np.uint8)
    stem_mask = cv2.morphologyEx(stem_mask, cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
    stem_mask = cv2.dilate(stem_mask, np.ones((3, 3), np.uint8), iterations=1)
    stem = save_layer(rgba, stem_mask, args.output_dir, "stem.webp", padding=8)

    leaf_crops = [
        (240, 785, 590, 1055),
        (605, 875, 930, 1145),
        (390, 1130, 575, 1385),
    ]
    leaves = []
    stem_layer = np.zeros_like(rgba)
    stem_layer[:, :, :3] = rgba[:, :, :3]
    stem_layer[:, :, 3] = ((rgba[:, :, 3].astype(np.uint16) * smooth_mask(stem_mask).astype(np.uint16)) // 255).astype(np.uint8)
    for index, (left, top, right, bottom) in enumerate(leaf_crops, start=1):
        crop = Image.fromarray(stem_layer[top:bottom, left:right], "RGBA")
        filename = f"leaf-{index:02d}.webp"
        crop.save(args.output_dir / filename, "WEBP", quality=90, method=6, exact=True)
        leaves.append(f"botanical/{filename}")

    manifest = {
        "canvas": {"width": CANVAS_WIDTH, "height": CANVAS_HEIGHT},
        "stem": stem,
        "center": center,
        "petals": petals,
        "leaves": leaves,
    }
    (args.output_dir / "layers.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(manifest, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
