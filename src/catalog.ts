import type { ProductApp } from "./apps";
import type { Locale } from "./i18n";

export type CatalogFilter = "all" | ProductApp["status"];
export const catalogCategories = ["time-records", "photo-creative", "everyday-tools"] as const;
export type CatalogCategory = (typeof catalogCategories)[number];
export type CatalogPurpose = "all" | CatalogCategory;

// Preserve familiar project names as search terms while showing current public names.
const appSearchAliases: Record<string, string[]> = {
  "beauty-touch": ["Beauty Up", "beautyUp"],
  "archive-ink": ["ArchiveInk", "Inkmile"],
  countlens: ["물체카운터", "물체 카운터", "ObjectCounter"],
  spotter: ["스포터"],
};

// Primary purpose, based on the descriptions: RUN POST creates a poster,
// AI OCR transcribes a document, and DeepPlayer is a viewing tool.
export const appCategories: Record<string, CatalogCategory> = {
  ssakmemo: "time-records", timeflower: "time-records", timeroots: "time-records",
  daymirror: "time-records", "time-journey": "time-records", "namu-note": "time-records", "ai-ocr": "time-records",
  "hiho-run": "photo-creative", "leaf-message": "photo-creative", "duo-studio": "photo-creative",
  "archive-ink": "photo-creative", "beauty-touch": "photo-creative", bluemoon: "photo-creative",
  "drawing-ground": "photo-creative", ringtone: "photo-creative",
  dohwaji: "everyday-tools", dailyplank: "everyday-tools", biondamae: "everyday-tools",
  countlens: "everyday-tools", "pretty-speech": "everyday-tools", jamgyeol: "everyday-tools",
  deepplayer: "everyday-tools", huntlog: "everyday-tools", autotrade: "everyday-tools", spotter: "everyday-tools",
};

export const catalogNavigationCopy = {
  ko: { purposes: "쓰임으로 보기", "time-records": "시간·기록", "photo-creative": "사진·창작", "everyday-tools": "생활 도구", hint: "쓰임과 진행 상태를 함께 선택할 수 있어요.", selected: "선택한 조건", remove: "조건 해제", reset: "모두 해제", preview: "빠른 미리보기", dismiss: "바깥을 누르거나 Esc 키로 닫기" },
  en: { purposes: "Browse by purpose", "time-records": "Time & notes", "photo-creative": "Photos & creation", "everyday-tools": "Everyday tools", hint: "Combine a purpose with an availability filter.", selected: "Active filters", remove: "Remove filter", reset: "Clear all", preview: "Quick preview", dismiss: "Tap outside or press Esc to close" },
  ja: { purposes: "用途から探す", "time-records": "時間・記録", "photo-creative": "写真・創作", "everyday-tools": "暮らしの道具", hint: "用途と公開状況を組み合わせて選べます。", selected: "選択中の条件", remove: "条件を解除", reset: "すべて解除", preview: "クイックプレビュー", dismiss: "外側をタップ、またはEscキーで閉じる" },
} satisfies Record<Locale, Record<string, string>>;

export const catalogCopy = {
  ko: { all: "전체", live: "운영 중", testing: "테스트 중", development: "개발 중", preparing: "출시 준비", demo: "웹 데모", search: "앱 이름이나 쓰임으로 찾기", placeholder: "메모, 사진, 시간…", clear: "검색 지우기", filters: "진행 상태로 보기", empty: "아직 맞는 앱을 찾지 못했어요.", reset: "전체 앱 다시 보기", results: "개 표시", iconPending: "아이콘 준비 중", inProgress: "새롭게 틔우는 중" },
  en: { all: "All", live: "Live", testing: "In testing", development: "In development", preparing: "Preparing", demo: "Web demo", search: "Find an app by name or purpose", placeholder: "Notes, photos, time…", clear: "Clear search", filters: "Filter by availability", empty: "No apps match this search yet.", reset: "Show all apps", results: "shown", iconPending: "Icon not finalized", inProgress: "Taking shape" },
  ja: { all: "すべて", live: "運用中", testing: "テスト中", development: "開発中", preparing: "リリース準備中", demo: "ウェブデモ", search: "名前や用途でアプリを探す", placeholder: "メモ、写真、時間…", clear: "検索を消去", filters: "公開状況で絞り込む", empty: "条件に合うアプリはまだありません。", reset: "すべてのアプリを表示", results: "件を表示", iconPending: "アイコン準備中", inProgress: "新しく芽吹くもの" },
} satisfies Record<Locale, Record<string, string>>;

export function filterApps(apps: ProductApp[], query: string, status: CatalogFilter, purpose: CatalogPurpose = "all") {
  const terms = query.normalize("NFKC").toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return apps.filter((app) => {
    if (status !== "all" && app.status !== status) return false;
    if (purpose !== "all" && appCategories[app.id] !== purpose) return false;
    // Search all names/translations so CountLens and 세어봐 lead to the same app.
    const haystack = [app.id, app.code, ...(appSearchAliases[app.id] ?? []), ...app.platforms, ...Object.values(app.content).flatMap((copy) =>
      [copy.displayName, copy.tagline, copy.description, ...copy.features])].join(" ").normalize("NFKC").toLocaleLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
