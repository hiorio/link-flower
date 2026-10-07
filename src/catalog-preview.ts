import { growingProjects } from "./growing-projects";
import type { Locale } from "./i18n";

export type CatalogPreviewImage = { src: string; alt: string; caption: string };

const existingImages: Record<string, { src: string; captions: Record<Locale, string> }> = {
  dohwaji: { src: "product-shots/dohwaji/seoul-day-1.webp", captions: { ko: "실제 웹 서비스의 공개 지도 · 서울 모임 동선 예시", en: "Public map from the actual web service · example Seoul meetup route", ja: "実際のウェブサービスの公開マップ · ソウルの集合ルート例" } },
  ssakmemo: { src: "product-shots/ssak-memo/01-library.webp", captions: { ko: "실제 앱 화면 · 보관함 구성 예시", en: "Actual app screen · example library contents", ja: "実際のアプリ画面 · 保管庫の構成例" } },
  "leaf-message": { src: "product-shots/leaf-message-composer.png", captions: { ko: "실제 iOS 앱 화면 · 메시지 작성 예시", en: "Actual iOS app screen · example message composition", ja: "実際のiOSアプリ画面 · メッセージ作成例" } },
  timeroots: { src: "product-shots/timeroots/03-timeline.webp", captions: { ko: "TimeRoots 1.2 실제 앱 화면 · 한국어 · 테스트 기록", en: "Actual TimeRoots 1.2 screen · Korean UI · test records", ja: "TimeRoots 1.2の実際の画面 · 韓国語UI · テスト記録" } },
  ringtone: { src: "product-shots/ringtone/home-{locale}.png", captions: { ko: "실제 출시 앱 화면 · 오디오 구간 편집", en: "Actual released app screen · audio segment editing", ja: "実際のリリース版画面 · オーディオ区間の編集" } },
};

// Reuse verified media and its original qualification; no invented run results.
// This registry belongs only to catalog navigation, not the product detail pages.
export function catalogPreviewImage(id: string, locale: Locale): CatalogPreviewImage | undefined {
  const project = growingProjects.find((entry) => entry.app.id === id);
  if (project?.media) {
    const { mediaAlt: alt, mediaCaption: caption } = project.copy[locale];
    const src = id === "daymirror" && locale === "en" ? "product-shots/daymirror/en-US/01-daily.webp" : project.media.src;
    return { src, alt, caption };
  }
  const image = existingImages[id];
  if (!image) return undefined;
  return { src: image.src.replace("{locale}", locale), alt: image.captions[locale], caption: image.captions[locale] };
}
