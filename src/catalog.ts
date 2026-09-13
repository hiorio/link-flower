import type { ProductApp } from "./apps";
import type { Locale } from "./i18n";

export type CatalogFilter = "all" | ProductApp["status"];

export const catalogCopy = {
  ko: { all: "전체", live: "운영 중", testing: "테스트 중", development: "개발 중", preparing: "출시 준비", demo: "웹 데모", search: "앱 이름이나 쓰임으로 찾기", placeholder: "메모, 사진, 시간…", clear: "검색 지우기", filters: "진행 상태로 보기", empty: "아직 맞는 앱을 찾지 못했어요.", reset: "전체 앱 다시 보기", results: "개 표시", iconPending: "아이콘 준비 중", inProgress: "새롭게 틔우는 중" },
  en: { all: "All", live: "Live", testing: "In testing", development: "In development", preparing: "Preparing", demo: "Web demo", search: "Find an app by name or purpose", placeholder: "Notes, photos, time…", clear: "Clear search", filters: "Filter by availability", empty: "No apps match this search yet.", reset: "Show all apps", results: "shown", iconPending: "Icon not finalized", inProgress: "Taking shape" },
  ja: { all: "すべて", live: "運用中", testing: "テスト中", development: "開発中", preparing: "リリース準備中", demo: "ウェブデモ", search: "名前や用途でアプリを探す", placeholder: "メモ、写真、時間…", clear: "検索を消去", filters: "公開状況で絞り込む", empty: "条件に合うアプリはまだありません。", reset: "すべてのアプリを表示", results: "件を表示", iconPending: "アイコン準備中", inProgress: "新しく芽吹くもの" },
} satisfies Record<Locale, Record<string, string>>;

export function filterApps(apps: ProductApp[], query: string, status: CatalogFilter) {
  const terms = query.normalize("NFKC").toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  return apps.filter((app) => {
    if (status !== "all" && app.status !== status) return false;
    // Search all names/translations so CountLens and 세어봐 lead to the same app.
    const haystack = [app.id, app.code, ...app.platforms, ...Object.values(app.content).flatMap((copy) =>
      [copy.displayName, copy.tagline, copy.description, ...copy.features])].join(" ").normalize("NFKC").toLocaleLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
