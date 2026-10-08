import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

async function moduleUrl(path, replacements = {}) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  let { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  for (const [specifier, url] of Object.entries(replacements)) outputText = outputText.replaceAll(`"${specifier}"`, `"${url}"`);
  return `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
}
const additional = await moduleUrl("../src/additional-projects.ts");
const visibility = await moduleUrl("../src/product-visibility.ts");
const growing = await moduleUrl("../src/growing-projects.ts", { "./additional-projects": additional, "./product-visibility": visibility });
const { productApps, appDetailPath, appIntroductionHref } = await import(await moduleUrl("../src/apps.ts", { "./growing-projects": growing }));

test("Biondamae introduction uses the internal page while opening weather uses the live service", () => {
  const app = productApps.find((item) => item.id === "biondamae");
  assert.ok(app);
  assert.equal(appDetailPath(app), "apps/biondamae/");
  assert.equal(appIntroductionHref(app, "/link-flower/"), "/link-flower/apps/biondamae/");
  assert.equal(appIntroductionHref(app, "/"), "/apps/biondamae/");
  assert.equal(app.links.find((link) => link.kind === "web").href, "https://web-dashboard-production-a81f.up.railway.app/");
});

const { weatherDays, weatherHours, rainVerdict, weatherScreenFiles } = await import(await moduleUrl("../src/biondamae-demo.ts"));
test("comparison examples have aligned hourly series and three distinct rain outcomes", () => {
  assert.equal(weatherDays.length, 3);
  assert.deepEqual(weatherDays.map((day) => rainVerdict(day.points[4])), ["missedRain", "matched", "unexpectedRain"]);
  assert.deepEqual(weatherDays.map((day) => day.points[4].observed - day.points[4].forecast), [4, 0, -4]);
  for (const day of weatherDays) {
    assert.ok(day.issued < day.date);
    assert.deepEqual(day.points.map((point) => point.hour), [...weatherHours]);
    for (const point of day.points) {
      assert.ok(point.forecast >= 18 && point.forecast <= 30);
      assert.ok(point.observed >= 18 && point.observed <= 30);
    }
  }
});

test("the independent introduction and all original app screenshots ship in the static build", async () => {
  const html = await readFile(new URL("../dist/apps/biondamae/index.html", import.meta.url), "utf8");
  assert.match(html, /비온다매 \| 그때 예보와 지금 날씨를 나란히/);
  assert.match(html, /https:\/\/hiorio.com\/apps\/biondamae\//);
  for (const file of weatherScreenFiles) {
    const source = await readFile(new URL(`../public/product-shots/biondamae/${file}`, import.meta.url));
    const built = await readFile(new URL(`../dist/product-shots/biondamae/${file}`, import.meta.url));
    assert.deepEqual(built, source);
    assert.ok(built.length > 10000);
  }
});

test("local introductions retain base paths and existing routes", () => {
  const dohwaji = productApps.find((item) => item.id === "dohwaji");
  assert.equal(appIntroductionHref(dohwaji, "/link-flower/"), "/link-flower/apps/dohwaji/");
  for (const app of productApps.filter((item) => appDetailPath(item) && !item.introductionUrl)) {
    assert.equal(appIntroductionHref(app, "/link-flower/"), `/link-flower/${appDetailPath(app)}`);
  }
  const withoutIntroduction = { ...dohwaji, id: "unlisted-example", detailPath: undefined, introductionUrl: undefined };
  assert.equal(appIntroductionHref(withoutIntroduction, "/link-flower/"), undefined);
});
