import { productApps, appIntroductionHref } from "./apps";
import { AppIcon } from "./AppIcon";
import { ServiceArrow } from "./ServiceArrow";
import { catalogCopy } from "./catalog";
import type { Locale } from "./i18n";
import "./media-collections.css";

export const mediaCollections = [
  { id: "photo-services", appIds: ["beauty-touch", "archive-ink"] },
  { id: "vision-services", appIds: ["countlens", "spotter"] },
] as const;

const copy = {
  ko: [
    { title: "사진을 다루는 도구", description: "인물 사진을 다듬고, 사진 속 기억을 기록으로 남겨요." },
    { title: "영상에서 알아보는 도구", description: "물체를 찾아 세거나 운동 동작을 분석해요. 인식 결과는 직접 확인하고 고칠 수 있어요." },
  ],
  en: [
    { title: "Tools for your photos", description: "Refine portraits and turn photographed moments into keepsakes." },
    { title: "Tools that understand motion", description: "Find and count objects, or analyze exercise movements. Review and correct recognition results yourself." },
  ],
  ja: [
    { title: "写真を扱う道具", description: "人物写真を整え、写真の思い出を記録に残します。" },
    { title: "映像から見つける道具", description: "物体を見つけて数えたり、運動の動きを分析したり。認識結果は自分で確認・修正できます。" },
  ],
} satisfies Record<Locale, { title: string; description: string }[]>;

export function MediaCollections({ locale, basePath }: { locale: Locale; basePath: string }) {
  return <div className="media-collections">{mediaCollections.map((group, index) => {
    const text = copy[locale][index];
    return <section id={group.id} aria-labelledby={`${group.id}-title`} key={group.id}>
      <h2 id={`${group.id}-title`}>{text.title}</h2><p>{text.description}</p>
      <ul>{group.appIds.map((id) => {
        const app = productApps.find((item) => item.id === id)!;
        const content = app.content[locale];
        return <li key={id}><a href={appIntroductionHref(app, basePath)}>
          <AppIcon app={app} locale={locale} basePath={basePath} size={48} priority />
          <div><h3>{content.displayName}<span>{catalogCopy[locale][app.status]}</span></h3><p>{content.tagline}</p></div>
          <ServiceArrow />
        </a></li>;
      })}</ul>
    </section>;
  })}</div>;
}
