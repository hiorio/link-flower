import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const browser = await chromium.launch({ channel: "msedge", headless: true });
const origin = process.env.PREVIEW_URL ?? "http://127.0.0.1:4173";
const directory = new URL("../.impeccable/review/catalog-additions/", import.meta.url);
await mkdir(directory, { recursive: true });
const slugs = ["beauty-touch", "bluemoon", "namu-note", "drawing-ground", "pretty-speech", "jamgyeol", "deepplayer", "huntlog", "ai-ocr", "autotrade"];
const results = [];
async function settleImages(page) {
  await page.locator("img").evaluateAll(async (images) => {
    for (const image of images) image.loading = "eager";
    await Promise.all(images.map((image) => image.decode()));
  });
  await page.evaluate(async () => {
    await document.fonts.ready;
    window.scrollTo({ top: 0, behavior: "instant" });
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}
try {
  for (const width of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, locale: "ko-KR", reducedMotion: "reduce" });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const slug of process.env.CATALOG_ONLY ? [] : slugs) {
      const response = await page.goto(`${origin}/apps/${slug}/`, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200);
      await page.locator("#growing-title").waitFor();
      assert.equal(await page.locator(".growing-brand strong").count(), 1);
      assert.ok(await page.locator(".growing-footer a").first().getAttribute("href"));
      await settleImages(page);
      const check = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
        height: document.documentElement.scrollHeight,
      }));
      assert.equal(check.overflow, false, `${slug}: horizontal overflow at ${width}`);
      assert.deepEqual(check.brokenImages, [], slug);
      assert.ok(check.height < 6500, slug);
      await page.screenshot({ path: new URL(`${slug}-${width}.png`, directory).pathname.replace(/^\/(\w:)/, "$1"), fullPage: true });
      for (const language of ["en", "ja", "ko"]) {
        await page.locator(`.language-switcher button[lang="${language}"]`).click();
        assert.ok((await page.locator("#growing-title").innerText()).length > 3);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${slug}: ${language} overflow`);
      }
      results.push({ slug, width, ...check });
    }
    for (const path of ["/", "/apps/"]) {
      await page.goto(`${origin}${path}`, { waitUntil: "networkidle" });
      const items = page.locator(path === "/" ? ".hub-link-list > li" : ".apps-product-card");
      assert.equal(await items.count(), 24);
      await page.getByRole("searchbox").fill("나무 노트");
      assert.equal(await items.count(), 1);
      assert.match(await items.innerText(), /나무 노트/);
      await page.getByRole("searchbox").fill("");
      await page.getByRole("button", { name: /^테스트 중/ }).click();
      assert.equal(await items.count(), 8);
      await page.getByRole("button", { name: /^개발 중/ }).click();
      assert.equal(await items.count(), 7);
      await page.getByRole("button", { name: /^전체/ }).click();
      await settleImages(page);
      await page.screenshot({ path: new URL(`${path === "/" ? "root" : "catalog"}-${width}.png`, directory).pathname.replace(/^\/(\w:)/, "$1"), fullPage: true });
      if (path === "/apps/") {
        // Bounded-height strips retain readable evidence for the long product directory.
        await page.setViewportSize({ width, height: 2000 });
        const height = await page.evaluate(() => document.documentElement.scrollHeight);
        for (let y = 0, part = 1; y < height; y += 1800, part++) {
          await page.evaluate(async (offset) => {
            window.scrollTo({ top: offset, behavior: "instant" });
            await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          }, y);
          await page.screenshot({ path: new URL(`catalog-${width}-part-${String(part).padStart(2, "0")}.png`, directory).pathname.replace(/^\/(\w:)/, "$1") });
        }
      }
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    }
    assert.deepEqual(errors, [], `Browser errors at ${width}`);
    await page.close();
  }
  if (!process.env.CATALOG_ONLY) await writeFile(new URL("results.json", directory), JSON.stringify(results, null, 2));
  console.log(`Verified ${results.length} detail renders and both 24-item catalogs; captured fully decoded catalog images.`);
} finally {
  await browser.close();
}
