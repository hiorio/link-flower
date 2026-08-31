import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import test from "node:test";

const pages = [
  ["../dist/index.html", "Hiorio — 아이디어를 오래 쓰이는 형태로 피우는 사람"],
  ["../dist/apps/index.html", "틔운 앱들 | Hiorio"],
  ["../dist/apps/dohwaji/index.html", "도화지 | 함께 만드는 모임 동선 지도"],
  ["../dist/apps/timeflower/index.html", "TimeFlower | 함께 쓰는 공유 캘린더"],
  ["../dist/apps/daily-plank/index.html", "매일 플랭크 | 5분부터 시작하는 플랭크 가이드"],
  ["../dist/apps/ssak-memo/index.html", "싹 메모 | 떠오른 순간, 바로 기록"],
  ["../dist/apps/leaf-message/index.html", "Leaf Message | 마음을 남기고, 상대의 홈 화면을 꾸미는 메시지"],
];

const operatingIcons = [
  "../dist/app-icons/dohwaji.jpg",
  "../dist/app-icons/timeroots.jpg",
  "../dist/app-icons/timeflower.png",
  "../dist/app-icons/daily-plank.png",
  "../dist/app-icons/biondamae.png",
  "../dist/app-icons/ssak-memo.webp",
  "../dist/app-icons/leaf-message.png",
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
  assert.ok(productStatuses.every((status) => status === "live"), "제품 디렉터리의 모든 앱은 운영 중이어야 합니다");
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
  assert.match(javascript, /그 싹을 무엇으로 피워낼지는, 기록한 우리가 결정합니다/);
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
  assert.match(rootHtml, /https:\/\/hiorio\.com\/og\.png/);
  assert.match(rootHtml, /theme-color" content="#22333b"/);
  assert.match(rootHtml, /og:image:width" content="1600"/);
  assert.match(rootHtml, /rel="canonical" href="https:\/\/hiorio\.com\/"/);
  assert.match(rootHtml, /twitter:card/);
  assert.doesNotMatch(rootHtml, /Node Network|노드 선택/);

  const socialImage = await stat(new URL("../dist/og.png", import.meta.url));
  assert.ok(socialImage.size > 50000, "social preview should contain the finished Hiorio artwork");

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
});
