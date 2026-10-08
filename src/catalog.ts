import type { ProductApp } from "./apps";
import type { Locale } from "./i18n";

export type CatalogFilter = "all" | ProductApp["status"];
export const catalogCategories = ["productivity", "photos", "vision", "writing", "everyday", "wellbeing", "media", "research"] as const;
export type CatalogCategory = (typeof catalogCategories)[number];
export type CatalogPurpose = "all" | CatalogCategory;

// Preserve familiar project names as search terms while showing current public names.
const appSearchAliases: Record<string, string[]> = {
  "beauty-touch": ["Beauty Up", "beautyUp"],
  "archive-ink": ["ArchiveInk", "Inkmile"],
  countlens: ["물체카운터", "물체 카운터", "ObjectCounter"],
  spotter: ["스포터"],
};

// One primary purpose per product; registry order and the separate botanical collection stay intact.
export const catalogGroups = {
  productivity: ["ssakmemo", "namu-note", "drawing-ground", "timeflower", "daymirror", "timeroots", "time-journey"],
  photos: ["beauty-touch", "archive-ink", "hiho-run", "duo-studio"],
  vision: ["countlens", "spotter", "huntlog"],
  writing: ["bluemoon", "pretty-speech", "ai-ocr"],
  everyday: ["dohwaji", "biondamae", "leaf-message"],
  wellbeing: ["dailyplank", "jamgyeol"],
  media: ["deepplayer", "ringtone"],
  research: ["autotrade"],
} as const satisfies Record<CatalogCategory, readonly string[]>;

export const appCategories = Object.fromEntries(catalogCategories.flatMap((category) =>
  catalogGroups[category].map((id) => [id, category]))) as Record<string, CatalogCategory>;

export const catalogNavigationCopy = {
  ko: { purposes: "쓰임으로 보기", productivity: "생산성·기록", photos: "사진·편집", vision: "영상·화면 인식", writing: "글쓰기·문서", everyday: "생활·소통", wellbeing: "운동·수면", media: "미디어·소리", research: "데이터 연구", hint: "쓰임과 진행 상태를 함께 선택할 수 있어요.", selected: "선택한 조건", remove: "조건 해제", reset: "모두 해제", preview: "빠른 미리보기", dismiss: "바깥을 누르거나 Esc 키로 닫기" },
  en: { purposes: "Browse by purpose", productivity: "Productivity & notes", photos: "Photos & editing", vision: "Visual recognition", writing: "Writing & documents", everyday: "Everyday & connections", wellbeing: "Exercise & sleep", media: "Video & sound", research: "Data research", hint: "Combine a purpose with an availability filter.", selected: "Active filters", remove: "Remove filter", reset: "Clear all", preview: "Quick preview", dismiss: "Tap outside or press Esc to close" },
  ja: { purposes: "用途から探す", productivity: "作業・記録", photos: "写真・編集", vision: "映像・画面認識", writing: "執筆・文書", everyday: "暮らし・つながり", wellbeing: "運動・睡眠", media: "動画・音", research: "データ研究", hint: "用途と公開状況を組み合わせて選べます。", selected: "選択中の条件", remove: "条件を解除", reset: "すべて解除", preview: "クイックプレビュー", dismiss: "外側をタップ、またはEscキーで閉じる" },
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
