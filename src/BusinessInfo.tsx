import type { Locale } from "./i18n";
import "./business-info.css";

const businessLabels = {
  ko: { title: "사업자 정보", name: "상호", representative: "대표자", registration: "사업자등록번호" },
  en: { title: "Business information", name: "Business name", representative: "Representative", registration: "Business registration no." },
  ja: { title: "事業者情報", name: "商号", representative: "代表者", registration: "事業者登録番号" },
} satisfies Record<Locale, Record<string, string>>;

// Verified against the business certificate supplied for Dohwaji.
// Keep the registered Korean name exact; residential and personal details are excluded.
export function BusinessInfo({ locale }: { locale: Locale }) {
  const labels = businessLabels[locale];

  return (
    <section className="business-info" aria-label={labels.title}>
      <dl>
        <div><dt>{labels.name}</dt><dd lang="ko">김휘호</dd></div>
        <div><dt>{labels.representative}</dt><dd lang="ko">김휘호</dd></div>
        <div><dt>{labels.registration}</dt><dd>609-33-76208</dd></div>
      </dl>
    </section>
  );
}
