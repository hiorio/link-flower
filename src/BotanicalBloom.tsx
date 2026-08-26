import type { CSSProperties } from "react";

type Layer = {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  originX: number;
  originY: number;
};

type Petal = Layer & {
  angle: number;
  inverseAngle: number;
  order: number;
};

type BotanicalStyle = CSSProperties & Record<`--${string}`, string | number>;

const stem: Layer = {
  src: "botanical/stem.webp",
  x: 23.3398,
  y: 44.6615,
  width: 65.4297,
  height: 54.2969,
  originX: 40.746,
  originY: -27.698,
};

const center: Layer = {
  src: "botanical/center.webp",
  x: 41.4062,
  y: 23.8932,
  width: 17.2852,
  height: 11.5234,
  originX: 49.718,
  originY: 49.718,
};

const petals: Petal[] = [
  { src: "botanical/petal-01.webp", x: 16.3086, y: 6.4453, width: 31.543, height: 22.2656, originX: 106.811, originY: 104.094, angle: -133.56, inverseAngle: 133.56, order: 2 },
  { src: "botanical/petal-02.webp", x: 38.8672, y: 1.4323, width: 27.0508, height: 25.1302, originX: 41.155, originY: 112.176, angle: -83.68, inverseAngle: 83.68, order: 3 },
  { src: "botanical/petal-03.webp", x: 53.6133, y: 8.724, width: 32.7148, height: 21.5495, originX: -11.045, originY: 96.979, angle: -32.03, inverseAngle: 32.03, order: 2 },
  { src: "botanical/petal-04.webp", x: 53.7109, y: 28.125, width: 36.2305, height: 15.5599, originX: -10.243, originY: 9.623, angle: 18.21, inverseAngle: -18.21, order: 1 },
  { src: "botanical/petal-05.webp", x: 48.7305, y: 32.6172, width: 24.0234, height: 16.4062, originX: 5.285, originY: -18.254, angle: 62.18, inverseAngle: -62.18, order: 0 },
  { src: "botanical/petal-06.webp", x: 23.0469, y: 31.7057, width: 26.8555, height: 19.401, originX: 100.364, originY: -10.738, angle: 123.98, inverseAngle: -123.98, order: 0 },
  { src: "botanical/petal-07.webp", x: 8.8867, y: 21.4193, width: 36.2305, height: 18.0339, originX: 113.477, originY: 45.487, angle: 177.8, inverseAngle: -177.8, order: 1 },
];

export const botanicalLeafPaths = [
  "botanical/leaf-01.webp",
  "botanical/leaf-02.webp",
  "botanical/leaf-03.webp",
] as const;

function layerStyle(layer: Layer, extra: BotanicalStyle = {}): BotanicalStyle {
  return {
    "--layer-x": `${layer.x}%`,
    "--layer-y": `${layer.y}%`,
    "--layer-width": `${layer.width}%`,
    "--layer-height": `${layer.height}%`,
    "--origin-x": `${layer.originX}%`,
    "--origin-y": `${layer.originY}%`,
    ...extra,
  };
}

export function BotanicalBloom({ basePath }: { basePath: string }) {
  return (
    <div className="botanical-stage">
      <img
        className="botanical-layer botanical-stem-art"
        src={`${basePath}${stem.src}`}
        alt=""
        decoding="async"
        fetchPriority="high"
        draggable="false"
        style={layerStyle(stem)}
      />
      <div className="botanical-bloom-head">
        {petals.map((petal) => (
          <img
            className="botanical-layer botanical-petal"
            src={`${basePath}${petal.src}`}
            alt=""
            decoding="async"
            fetchPriority="high"
            draggable="false"
            key={petal.src}
            style={layerStyle(petal, {
              "--petal-angle": `${petal.angle}deg`,
              "--petal-angle-inverse": `${petal.inverseAngle}deg`,
              "--bloom-order": petal.order,
              "--bloom-delay": `${610 + petal.order * 90}ms`,
            })}
          />
        ))}
        <img
          className="botanical-layer botanical-center-art"
          src={`${basePath}${center.src}`}
          alt=""
          decoding="async"
          fetchPriority="high"
          draggable="false"
          style={layerStyle(center)}
        />
      </div>
    </div>
  );
}
