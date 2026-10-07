import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";
import "./biondamae-links.test.mjs";

// Evaluate the same typed registry used by the site, without a DOM or source-shape regex.
async function moduleUrl(path, replacements = {}) {
  const source = await readFile(new URL(path, import.meta.url), "utf8");
  let { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  for (const [specifier, url] of Object.entries(replacements)) outputText = outputText.replaceAll(`"${specifier}"`, `"${url}"`);
  return `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`;
}
const additionalModule = await moduleUrl("../src/additional-projects.ts");
const projectModule = await moduleUrl("../src/growing-projects.ts", { "./additional-projects": additionalModule });
const { growingProjects } = await import(projectModule);
const { productApps, appDetailPath } = await import(await moduleUrl("../src/apps.ts", { "./growing-projects": projectModule }));
const { filterApps, catalogCopy, appCategories, catalogCategories, catalogNavigationCopy } = await import(await moduleUrl("../src/catalog.ts"));
const { catalogPreviewImage } = await import(await moduleUrl("../src/catalog-preview.ts", { "./growing-projects": projectModule }));

test("쓰임 분류는 25개 제품을 빠짐없이 포함하고 검색·진행 상태와 함께 적용된다", () => {
  assert.deepEqual(Object.keys(appCategories).sort(), productApps.map((app) => app.id).sort());
  assert.deepEqual(catalogCategories.map((purpose) => filterApps(productApps, "", "all", purpose).length), [7, 8, 10]);
  assert.deepEqual(filterApps(productApps, "", "live", "time-records").map((app) => app.id), ["ssakmemo", "daymirror", "timeflower", "timeroots"]);
  assert.deepEqual(filterApps(productApps, "소설", "development", "photo-creative").map((app) => app.id), ["bluemoon"]);
  assert.deepEqual(filterApps(productApps, "소설", "development", "time-records").map((app) => app.id), ["ai-ocr"]);
  assert.deepEqual(filterApps(productApps, "CountLens", "testing", "photo-creative"), []);
  assert.deepEqual(filterApps(productApps, "", "all", "all"), productApps);
  for (const locale of ["ko", "en", "ja"]) {
    for (const purpose of catalogCategories) assert.ok(catalogNavigationCopy[locale][purpose]);
    assert.ok(catalogNavigationCopy[locale].preview);
  }
});

test("빠른 미리보기는 기존 이미지만 사용하고 화면 출처 설명과 언어별 파일을 유지한다", async () => {
  assert.equal(productApps.filter((app) => catalogPreviewImage(app.id, "ko")).length, 15);
  for (const app of productApps) for (const locale of ["ko", "en", "ja"]) {
    const image = catalogPreviewImage(app.id, locale);
    if (!image) continue;
    assert.ok(image.alt && image.caption, `${app.id}/${locale}: 출처 설명`);
    assert.ok((await stat(new URL(`../public/${image.src}`, import.meta.url))).size > 0);
  }
  assert.match(catalogPreviewImage("archive-ink", "ko").caption, /예시.*앱 화면 아님/);
  assert.match(catalogPreviewImage("hiho-run", "ko").caption, /샘플 러닝 기록/);
  assert.match(catalogPreviewImage("bluemoon", "ko").caption, /브라우저 미리보기.*예제/);
  assert.match(catalogPreviewImage("jamgyeol", "ko").caption, /예시 수면 데이터.*의료 측정 결과 아님/);
  assert.equal(catalogPreviewImage("time-journey", "ko"), undefined);
  assert.match(catalogPreviewImage("ringtone", "ja").src, /home-ja\.png$/);
  assert.match(catalogPreviewImage("daymirror", "en").src, /en-US/);
});
const { timeRootsDays, timeRootsWeeks } = await import(await moduleUrl("../src/timeroots-demo.ts"));

test("TimeRoots의 독립 경로와 운영 링크, 주·월 예시 합계가 일치한다", async () => {
  const app = productApps.find((item) => item.id === "timeroots");
  assert.equal(appDetailPath(app), "apps/timeroots/");
  assert.equal(app.version, "1.2");
  assert.equal(app.links.find((link) => link.kind === "appStore").href, "https://apps.apple.com/app/id6798457487");
  assert.equal(app.links.find((link) => link.kind === "support").href, "https://hiorio.github.io/timeroots-support/");
  assert.equal(timeRootsDays.length, 28);
  assert.equal(timeRootsWeeks.length, 4);
  assert.equal(timeRootsDays.reduce((sum, day) => sum + day.minutes, 0), timeRootsWeeks.reduce((sum, week) => sum + week.minutes, 0));
  for (const file of ["03-timeline", "04-analytics"]) {
    assert.ok((await stat(new URL(`../dist/product-shots/timeroots/${file}.webp`, import.meta.url))).size > 1000);
  }
});

const pages = [
  ["../dist/index.html", "HIORIO | BlueMoon과 직접 만드는 앱·서비스"],
  ["../dist/collections/productivity/index.html", "작은 도구의 생태계 | HIORIO 생산성 보조 도구"],
  ["../dist/apps/index.html", "틔운 앱들 | Hiorio"],
  ["../dist/apps/dohwaji/index.html", "도화지 | 함께 만드는 모임 동선 지도"],
  ["../dist/apps/timeflower/index.html", "TimeFlower | 함께 쓰는 공유 캘린더"],
  ["../dist/apps/timeroots/index.html", "TimeRoots | 하루의 기록이 삶의 흐름으로"],
  ["../dist/apps/biondamae/index.html", "비온다매 | 그때 예보와 지금 날씨를 나란히"],
  ["../dist/apps/daily-plank/index.html", "매일 플랭크 | 5분부터 시작하는 플랭크 가이드"],
  ["../dist/apps/ssak-memo/index.html", "싹 메모 | 떠오른 순간, 바로 기록"],
  ["../dist/apps/leaf-message/index.html", "Leaf Message | 마음을 남기고, 상대의 홈 화면을 꾸미는 메시지"],
  ["../dist/apps/ringtone/index.html", "벨소리로 | 좋아하는 소리의 한 구간을 벨소리로"],
  ...growingProjects.map(({ app }) => [`../dist/${app.detailPath}index.html`, `${app.content.ko.displayName} | ${app.content.ko.tagline}`]),
];

const operatingIcons = [
  "../dist/app-icons/dohwaji.jpg",
  "../dist/app-icons/timeroots.jpg",
  "../dist/app-icons/timeflower.png",
  "../dist/app-icons/daily-plank.png",
  "../dist/app-icons/biondamae.png",
  "../dist/app-icons/ssak-memo.webp",
  "../dist/app-icons/leaf-message.png",
  "../dist/app-icons/ringtone.png",
];

const ssakMemoShots = [
  "../dist/product-shots/ssak-memo/01-library.webp",
  "../dist/product-shots/ssak-memo/02-text.webp",
  "../dist/product-shots/ssak-memo/03-voice.webp",
  "../dist/product-shots/ssak-memo/04-detail.webp",
  "../dist/product-shots/ssak-memo/05-filter.webp",
];

const leafMessageShots = [
  "../dist/product-shots/leaf-message-widget-medium.png",
  "../dist/product-shots/leaf-message-widget-large.png",
  "../dist/product-shots/leaf-message-composer.png",
];

const botanicalLayers = [
  "../dist/botanical/stem.webp",
  "../dist/botanical/center.webp",
  "../dist/botanical/petal-01.webp",
  "../dist/botanical/petal-02.webp",
  "../dist/botanical/petal-03.webp",
  "../dist/botanical/petal-04.webp",
  "../dist/botanical/petal-05.webp",
  "../dist/botanical/petal-06.webp",
  "../dist/botanical/petal-07.webp",
  "../dist/botanical/leaf-01.webp",
  "../dist/botanical/leaf-02.webp",
  "../dist/botanical/leaf-03.webp",
];

test("루트와 하위 노드의 정적 페이지가 생성된다", async () => {
  for (const [path, title] of pages) {
    const html = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(html, /<html lang="ko">/);
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`));
    assert.match(html, /\/assets\//);
    assert.doesNotMatch(html, /\/link-flower\//);
    assert.doesNotMatch(html, /chatgpt-team|kaviodori|cloudflare|#\/apps|#\/horror/i);
  }

  for (const hiddenPath of ["../dist/channels/index.html", "../dist/horror/index.html"]) {
    await assert.rejects(stat(new URL(hiddenPath, import.meta.url)), { code: "ENOENT" });
  }

  const visibilitySource = await readFile(new URL("../src/visibility.ts", import.meta.url), "utf8");
  assert.match(visibilitySource, /SHOW_HORROR_DOPAMINE = false/);

  const assetsDirectory = new URL("../dist/assets/", import.meta.url);
  const javascriptFile = (await readdir(assetsDirectory)).find((file) => file.endsWith(".js"));
  const stylesheetFile = (await readdir(assetsDirectory)).find((file) => file.endsWith(".css"));
  assert.ok(javascriptFile, "JavaScript bundle should exist");
  assert.ok(stylesheetFile, "CSS bundle should exist");

  const javascript = await readFile(new URL(javascriptFile, assetsDirectory), "utf8");
  const stylesheet = await readFile(new URL(stylesheetFile, assetsDirectory), "utf8");
  const productSource = await readFile(new URL("../src/apps.ts", import.meta.url), "utf8");
  const productStatuses = [...productSource.matchAll(/^    status: "([^"]+)",$/gm)].map((match) => match[1]);
  assert.equal(productStatuses.length, operatingIcons.length);
  assert.ok(productStatuses.every((status) => status === "live"), "기존 운영 앱 8개의 상태는 유지해야 합니다");
  assert.match(javascript, /Select language/);
  assert.match(javascript, /言語を選択/);
  assert.match(javascript, /link-flower-locale/);
  assert.match(javascript, /https:\/\/dohwaji\.app/);
  assert.doesNotMatch(javascript, /map-line-production\.up\.railway\.app/);
  assert.match(javascript, /TimeRoots/);
  assert.match(javascript, /TimeFlower/);
  assert.match(javascript, /매일 플랭크/);
  assert.match(javascript, /비온다매/);
  assert.match(javascript, /싹 메모/);
  assert.match(javascript, /Leaf Message/);
  assert.match(javascript, /벨소리로/);
  assert.match(javascript, /Make It a Ringtone/);
  assert.match(javascript, /Hiorio 着信音メーカー/);
  assert.match(javascript, /https:\/\/apps\.apple\.com\/app\/id6809625649/);
  assert.match(javascript, /상대의 홈 화면에 남기는 짧은 마음/);
  assert.match(javascript, /감성 메시지를 남기고, 상대의 홈 화면 한 칸을 꾸밉니다/);
  assert.match(javascript, /STYLE THEIR SCREEN/);
  assert.match(javascript, /비 온다던 예보, 맞았는지까지 한눈에/);
  assert.doesNotMatch(javascript, /마음을 남기고, 상대의 홈 화면을 꾸미는 앱|마음을 남기고, 상대의 홈 화면을 꾸밉니다|비 온다던 예보, 정말 맞았는지 확인하는|비 온다던 예보가 정말 맞았는지 끝까지 확인합니다|꾸미는 앱입니다|날씨 앱입니다|메모 앱입니다|확인하는 앱입니다/);
  assert.match(javascript, /웹 데모/);
  assert.match(javascript, /HIORIO \/ INDEPENDENT MAKER/);
  assert.match(javascript, /아이디어를 오래 쓰이는 형태로 만듭니다/);
  assert.match(javascript, /우선은 제가 필요로 하는 것들을 피워내요/);
  assert.match(javascript, /다음 가지/);
  assert.doesNotMatch(javascript, /👀|GROWING SINCE|2024 · SEOUL/);
  assert.match(javascript, /APPS IN BLOOM\./);
  assert.match(javascript, /제품 디렉터리/);
  assert.match(javascript, /Product directory/);
  assert.match(javascript, /プロダクト一覧/);
  assert.match(javascript, /제품 살펴보기/);
  assert.match(javascript, /apps-showcase-copy/);
  assert.doesNotMatch(javascript, /apps-hero-copy/);
  assert.match(javascript, /나부터 필요로 하는 것을 만듭니다/);
  assert.match(javascript, /더 많은 사람이 쉽게 닿을 수 있도록/);
  assert.match(javascript, /필요한 순간에만 묻습니다/);
  assert.match(javascript, /BUILT FROM NEED/);
  assert.match(javascript, /ACCESS FIRST/);
  assert.match(javascript, /ASK WITH CONTEXT/);
  assert.doesNotMatch(javascript, /사용자에게 비용을 받지 않습니다/);
  assert.doesNotMatch(javascript, /FREE TO USE/);
  assert.match(javascript, /친구, 연인, 가족과 어디서 만나 어디로 이동할지/);
  assert.match(javascript, /매일 플랭크는 제 첫 앱이 되었습니다/);
  assert.match(javascript, /현재 운영 중인 도화지 웹 화면/);
  assert.match(javascript, /다음 모임은 도화지 한 장으로 정리하세요/);
  assert.match(javascript, /apps\/dohwaji/);
  assert.match(javascript, /apps\/timeflower/);
  assert.match(javascript, /apps\/daily-plank/);
  assert.match(javascript, /apps\/ssak-memo/);
  assert.match(javascript, /apps\/leaf-message/);
  assert.match(javascript, /apps\/ringtone/);
  assert.match(javascript, /그렇게 심은 생각을 무엇으로 피워낼지는, 기록한 우리가 결정합니다/);
  assert.doesNotMatch(javascript, /PRIMARY SIGNAL|horror_dopamine|horrordopamine/);

  for (const path of operatingIcons) {
    const icon = await stat(new URL(path, import.meta.url));
    assert.ok(icon.size > 1000, `${path} should contain the operating app artwork`);
  }

  assert.match(javascript, /app-icons\/dohwaji\.jpg/);
  assert.match(javascript, /app-icons\/timeroots\.jpg/);
  assert.match(javascript, /app-icons\/timeflower\.png/);
  assert.match(javascript, /app-icons\/daily-plank\.png/);
  assert.match(javascript, /app-icons\/biondamae\.png/);
  assert.match(javascript, /app-icons\/ssak-memo\.webp/);
  assert.match(javascript, /app-icons\/leaf-message\.png/);
  assert.match(javascript, /app-icons\/ringtone\.png/);

  for (const path of ssakMemoShots) {
    const screenshot = await stat(new URL(path, import.meta.url));
    assert.ok(screenshot.size > 10000, `${path} should contain the optimized App Store screen`);
  }

  for (const path of leafMessageShots) {
    const screenshot = await stat(new URL(path, import.meta.url));
    assert.ok(screenshot.size > 150000, `${path} should contain an actual Leaf Message beta screen`);
  }
  assert.match(javascript, /leaf-message-widget-medium\.png/);
  assert.match(javascript, /leaf-message-widget-large\.png/);
  assert.match(javascript, /leaf-message-composer\.png/);

  const rootHtml = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(rootHtml, /https:\/\/hiorio\.com\/product-shots\/bluemoon\/writing\.png/);
  assert.match(rootHtml, /theme-color" content="#22333b"/);
  assert.match(rootHtml, /og:image:width" content="1440"/);
  assert.match(rootHtml, /rel="canonical" href="https:\/\/hiorio\.com\/"/);
  assert.match(rootHtml, /twitter:card/);
  assert.doesNotMatch(rootHtml, /Node Network|노드 선택/);

  const socialImage = await stat(new URL("../dist/product-shots/bluemoon/writing.png", import.meta.url));
  assert.ok(socialImage.size > 50000, "social preview should contain the actual BlueMoon development capture");

  let botanicalBytes = 0;
  for (const path of botanicalLayers) {
    const layer = await stat(new URL(path, import.meta.url));
    assert.ok(layer.size > 5000, `${path} should contain finished botanical artwork`);
    botanicalBytes += layer.size;
  }
  assert.ok(botanicalBytes > 150000, "the layered bloom should contain the complete botanical artwork");
  assert.match(javascript, /botanical\/petal-01\.webp/);
  assert.match(javascript, /botanical\/center\.webp/);
  assert.doesNotMatch(javascript, /hero-botanical\.webp/);
  assert.match(stylesheet, /hiorio-petal-open/);
  assert.match(stylesheet, /botanical-pointer-ready/);
  assert.match(stylesheet, /garden-pointer-ready/);
  assert.match(javascript, /--flower-stage-x/);
  assert.match(javascript, /--garden-leaf-x/);
  assert.match(javascript, /--garden-trunk-x/);
  assert.match(javascript, /--garden-future-x/);
  assert.match(javascript, /pointercancel/);
  assert.match(stylesheet, /apps-showcase-hero/);
  assert.match(stylesheet, /apps-directory-item/);
  assert.match(stylesheet, /apps-product-card/);
  assert.match(stylesheet, /apps-method-item/);
  assert.match(stylesheet, /product-sprout/);
  assert.match(stylesheet, /product-leaf/);
  assert.match(stylesheet, /ssak-hero/);
  assert.match(stylesheet, /ssak-capture-grid/);
  assert.match(stylesheet, /leafmessage-hero/);
  assert.match(stylesheet, /leafmessage-presentation/);
  assert.match(stylesheet, /\.apps-product-links a\{[^}]*min-height:44px/);
  assert.match(stylesheet, /prefers-reduced-motion:reduce/);
  assert.doesNotMatch(stylesheet, /hiorio-botanical-sway/);

  const timeFlowerIcon = await readFile(new URL("../dist/app-icons/timeflower.png", import.meta.url));
  assert.equal(
    createHash("sha256").update(timeFlowerIcon).digest("hex"),
    "45b0dd9b95adbf6f0001837b8a230b917fe0773cd2e53c37e105c8bf17c6015a",
    "TimeFlower should use the iPhone build 6 operating icon",
  );

  const biondamaeIcon = await readFile(new URL("../dist/app-icons/biondamae.png", import.meta.url));
  assert.equal(
    createHash("sha256").update(biondamaeIcon).digest("hex"),
    "b30c8eab930b18f2d2169f105b17c7ca925bdcc978fc9cf496965aecd9d0d1a8",
    "Biondamae should use the version 1.1.0 operating icon",
  );

  const ssakMemoIcon = await readFile(new URL("../dist/app-icons/ssak-memo.png", import.meta.url));
  assert.equal(
    createHash("sha256").update(ssakMemoIcon).digest("hex"),
    "71c1eeb3085dd5111598a67e1f650f43bb0962e4eb31b6d317141620a02b3c1c",
    "Ssak Memo should use the iPhone build 5 operating icon",
  );

  const leafMessageIcon = await readFile(new URL("../dist/app-icons/leaf-message.png", import.meta.url));
  assert.equal(
    createHash("sha256").update(leafMessageIcon).digest("hex"),
    "4d44f4ad58de05d14b834c746f17903c91b7df799980cf68091deac6ea7df135",
    "Leaf Message should use the TestFlight Build 17 operating icon",
  );

  const ssakMemoHtml = await readFile(new URL("../dist/apps/ssak-memo/index.html", import.meta.url), "utf8");
  assert.match(ssakMemoHtml, /https:\/\/hiorio\.com\/apps\/ssak-memo\//);
  assert.match(ssakMemoHtml, /https:\/\/hiorio\.com\/app-icons\/ssak-memo\.png/);
  assert.match(ssakMemoHtml, /twitter:card/);

  const leafMessageHtml = await readFile(new URL("../dist/apps/leaf-message/index.html", import.meta.url), "utf8");
  assert.match(leafMessageHtml, /https:\/\/hiorio\.com\/apps\/leaf-message\//);
  assert.match(leafMessageHtml, /https:\/\/hiorio\.com\/app-icons\/leaf-message\.png/);
  assert.match(leafMessageHtml, /twitter:card/);

  const ringtoneHtml = await readFile(new URL("../dist/apps/ringtone/index.html", import.meta.url), "utf8");
  assert.match(ringtoneHtml, /https:\/\/hiorio\.com\/apps\/ringtone\//);
  assert.match(ringtoneHtml, /https:\/\/hiorio\.com\/app-icons\/ringtone\.png/);
  assert.match(ringtoneHtml, /twitter:card/);
});

test("메인과 앱 목록은 도화지·싹 메모·DayMirror·RUN POST를 우선 표시한다", async () => {
  assert.deepEqual(productApps.map((entry) => entry.id), [
    "dohwaji", "ssakmemo", "daymirror", "hiho-run", "timeflower", "dailyplank", "biondamae", "leaf-message",
    "countlens", "duo-studio", "archive-ink", "time-journey",
    "beauty-touch", "bluemoon", "namu-note", "drawing-ground", "pretty-speech", "jamgyeol",
    "deepplayer", "huntlog", "ai-ocr", "autotrade", "spotter", "timeroots", "ringtone",
  ]);
  assert.deepEqual(productApps.map((entry) => entry.order), Array.from({ length: productApps.length }, (_, i) => String(i + 1).padStart(2, "0")));
  const runPost = productApps.find((app) => app.id === "hiho-run");
  const dayMirror = productApps.find((app) => app.id === "daymirror");
  for (const locale of ["ko", "en", "ja"]) {
    assert.equal(runPost.content[locale].displayName, "RUN POST");
    assert.equal(dayMirror.content[locale].displayName, "DayMirror");
  }
  assert.equal(appDetailPath(runPost), "apps/hiho-run/", "기존 상세 링크를 유지합니다");

  for (const path of ["../src/LinkHub.tsx", "../src/App.tsx"]) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.match(source, /import \{ productApps\b[^}]*\} from "\.\/apps"/);
    assert.match(source, /catalog\.apps\.map\(/);
    assert.doesNotMatch(source, /productApps\.(?:sort|reverse)\(/);
    assert.match(source, /appIntroductionHref\(app, basePath\)/);
  }
});

test("새 프로젝트는 정확한 상태와 독립 주소, 세 언어의 소개를 갖는다", async () => {
  assert.equal(productApps.filter((app) => app.status === "live").length, 9);
  assert.deepEqual(growingProjects.map(({ app }) => [app.id, app.status]), [
    ["countlens", "testing"], ["duo-studio", "testing"], ["archive-ink", "development"],
    ["hiho-run", "testing"], ["daymirror", "live"], ["time-journey", "development"],
    ["beauty-touch", "testing"], ["bluemoon", "development"], ["namu-note", "development"],
    ["drawing-ground", "testing"], ["pretty-speech", "testing"], ["jamgyeol", "testing"],
    ["deepplayer", "development"], ["huntlog", "testing"], ["ai-ocr", "development"], ["autotrade", "development"], ["spotter", "testing"],
  ]);
  assert.equal(new Set(productApps.map((app) => app.id)).size, productApps.length);
  for (const project of growingProjects) {
    const app = productApps.find((item) => item.id === project.app.id);
    assert.equal(appDetailPath(app), project.app.detailPath);
    assert.equal(app.links.length, app.id === "daymirror" ? 1 : 0, "내부 TestFlight를 공개 설치로 안내하면 안 됩니다");
    const html = await readFile(new URL(`../dist/${app.detailPath}index.html`, import.meta.url), "utf8");
    assert.ok(html.includes(`rel="canonical" href="https://hiorio.com/${app.detailPath}"`));
    for (const locale of ["ko", "en", "ja"]) {
      assert.ok(app.content[locale].description.length > 30);
      assert.equal(app.content[locale].features.length, project.copy[locale].featureDetails.length);
      assert.ok(project.copy[locale].availability.length > 30);
      assert.ok(project.copy[locale].mediaCaption.length > 10);
    }
    for (const media of [project.media, project.secondaryMedia].filter(Boolean)) {
      const file = await stat(new URL(`../dist/${media.src}`, import.meta.url));
      assert.ok(file.size > 20000 && file.size < 650000, media.src);
    }
  }
  const source = await readFile(new URL("../src/growing-projects.ts", import.meta.url), "utf8");
  assert.doesNotMatch(source, /appstoreconnect\.apple\.com|testflight\.apple\.com|C:\\|welsp|@[a-zA-Z]+\./);
  assert.match(source, /현재 생성은 모델 설치 후 기기 안에서 처리하며 외부 생성 API를 사용하지 않습니다/);
  assert.match(source, /샘플 러닝 기록/);
  assert.match(source, /앱 실행 화면 아님/);
  const timeJourney = growingProjects.find(({ app }) => app.id === "time-journey");
  assert.equal(timeJourney.app.icon, null, "미확정 아이콘을 운영 아이콘처럼 만들지 않습니다");
  assert.equal(timeJourney.media, undefined);
});

test("검색은 언어에 관계없이 동작하고 필터가 우선순위를 바꾸지 않는다", () => {
  assert.equal(filterApps(productApps, "", "all").length, 25);
  assert.equal(filterApps(productApps, "", "live").length, 9);
  assert.equal(filterApps(productApps, "", "testing").length, 9);
  assert.equal(filterApps(productApps, "", "development").length, 7);
  for (const query of ["세어봐", "CountLens", "ＣＯＵＮＴＬＥＮＳ", "  countlens  "]) {
    assert.deepEqual(filterApps(productApps, query, "all").map((app) => app.id), ["countlens"]);
  }
  assert.ok(filterApps(productApps, "계획", "all").some((app) => app.id === "daymirror"));
  for (const query of ["RUN POST", "run post", "ＲＵＮ ＰＯＳＴ"]) {
    assert.deepEqual(filterApps(productApps, query, "all").map((app) => app.id), ["hiho-run"]);
  }
  assert.deepEqual(filterApps(productApps, "사진", "development").map((app) => app.id), ["archive-ink"]);
  assert.deepEqual(filterApps(productApps, "does-not-exist", "all"), []);
  assert.deepEqual(filterApps(productApps, "Daymirror", "live").map(app => app.id), ["daymirror"]);
  for (const [query, id] of [["Beauty Up", "beauty-touch"], ["beautyUp", "beauty-touch"], ["Inkmile", "archive-ink"], ["ArchiveInk", "archive-ink"], ["물체카운터", "countlens"], ["Spotter", "spotter"], ["스포터", "spotter"], ["나무 노트", "namu-note"], ["Namu Note", "namu-note"], ["블루문", "bluemoon"], ["BlueMoon", "bluemoon"], ["예쁘게 말하기", "pretty-speech"], ["잠결", "jamgyeol"], ["LOCAL API", "ai-ocr"]]) {
    assert.deepEqual(filterApps(productApps, query, "all").map(app => app.id), [id]);
  }
  for (const filter of ["all", "live", "testing", "development"]) {
    const result = filterApps(productApps, "", filter);
    assert.deepEqual(result.map((app) => app.order), result.map((app) => app.order).sort());
    for (const locale of ["ko", "en", "ja"]) assert.ok(catalogCopy[locale][filter]);
  }
});

test("새 앱 아이콘은 프로젝트 원본을 그대로 사용한다", async () => {
  const hashes = {
    countlens: "9347137e49ecebd1dde9409f2bcaa17424179e7d0983769f5b36f4ad045e46d8",
    "duo-studio": "a88ff7f5a4470b1cce48fe77a51e6e8d8d7ec89db9ba494ce456350d6b93eb52",
    "archive-ink": "d2171102addf456b74bb88188fe5d80bd90b84b38662da2728d5cebe1eefcb8d",
    "hiho-run": "2ac790390842f83c4e76f8532a4d79e7fa21a40a48483e8d18004e0518275956",
    daymirror: "fc176eac5ec32c8dbfbfa65f215d0bd8928144241f6930961597ddac750458ba",
    "beauty-touch": "a6b5b3ed4fc74f12f97fb5c64b1378afc4a925a03578c9730bdd629e624999d5",
    bluemoon: "0866f0ece6d8edc310a1b18e839463f3c0914c19d88f9d279ee48b4bf7939996",
    "namu-note": "5ce75116750539d2c0575601ec181c0620e7a2d4c0b1874ab7f9fd3553ee06e8",
    "drawing-ground": "509c71454bec6c9bf77835c3cc619d517b96b2762b5fe75ec4e25bebd3f79007",
    "pretty-speech": "6e23e7138693017dea2890d118921a85f86b50a1d85fbec82272376cfeba16ae",
    jamgyeol: "3473684a5fc2ef130144a458819ae9c296785396596c7551079394de44ff8fb6",
    deepplayer: "c0beb76bebd8a7005671ddc898fb0fc250e71b564a1380f44d34d9281bafcc19",
  };
  for (const [id, hash] of Object.entries(hashes)) {
    const app = productApps.find((app) => app.id === id);
    const file = await readFile(new URL(`../dist/${app.icon}`, import.meta.url));
    assert.equal(createHash("sha256").update(file).digest("hex"), hash, id);
  }
});

test("DayMirror 전용 페이지는 출시 링크와 실제 화면, 접근 가능한 선택기를 제공한다", async () => {
  const app = productApps.find(app => app.id === "daymirror");
  assert.equal(app.version, "1.3");
  assert.equal(app.status, "live");
  assert.equal(app.links[0].href, "https://apps.apple.com/app/id6811468895");
  const page = await readFile(new URL("../src/DayMirrorPage.tsx", import.meta.url), "utf8");
  assert.match(page, /aria-pressed=\{scene === i\}/);
  assert.match(page, /aria-pressed=\{theme === i\}/);
  assert.match(page, /aria-pressed=\{actual\}/);
  assert.match(page, /aria-live="polite"/);
  assert.match(page, /유료 앱/);
  assert.match(page, /예시 일정/);
  for (const locale of ["ko", "en-US"]) {
    for (const name of ["01-daily", "04-todos", "07-review", "08-theme-paper", "08-theme-midnight", "06-monthly", "06-monthly-actual"]) {
      const file = await stat(new URL(`../dist/product-shots/daymirror/${locale}/${name}.webp`, import.meta.url));
      assert.ok(file.size > 15000 && file.size < 650000);
    }
  }
});

test("벨소리로는 출시 원본 자산과 예시 구분을 유지한다", async () => {
  const originals = [
    ["../dist/app-icons/ringtone.png", "72d4ae78909ebb7b74c9d99968317c7b48b3506dea26bb5a82fda989f30732af"],
    ["../dist/product-shots/ringtone/home-ko.png", "96929f1365c3a7a58546e720eb6687ceb4d036c0b8365bf23d209122ef609f57"],
    ["../dist/product-shots/ringtone/home-en.png", "6a051b835628e7a37e06c5fb6efc4fc566235c209b6f8f85537f4777394c307e"],
    ["../dist/product-shots/ringtone/home-ja.png", "999579042949eaeaf490fe38fcc826568d2274370df1e9546227c26df3522fe1"],
  ];
  for (const [path, hash] of originals) {
    const file = await readFile(new URL(path, import.meta.url));
    assert.equal(createHash("sha256").update(file).digest("hex"), hash, path);
  }
  const copy = await readFile(new URL("../src/ringtone-copy.ts", import.meta.url), "utf8");
  assert.match(copy, /실제 음원은 재생되지 않아요/);
  assert.match(copy, /최종 적용은 공유 메뉴에서 사용자가 직접/);
  assert.match(copy, /DRM으로 보호된 스트리밍 음악은 편집할 수 없습니다/);
  const page = await readFile(new URL("../src/RingtonePage.tsx", import.meta.url), "utf8");
  assert.match(page, /aria-pressed=\{position === i\}/);
  assert.match(page, /role="status"/);
  assert.match(page, /<details/);
  assert.doesNotMatch(page, /<audio|autoPlay|fileImporter/);
});
