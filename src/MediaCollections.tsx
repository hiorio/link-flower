import { productApps, appIntroductionHref } from "./apps";
import { AppIcon } from "./AppIcon";
import { ServiceArrow } from "./ServiceArrow";
import { catalogCopy, catalogGroups } from "./catalog";
import type { Locale } from "./i18n";
import "./media-collections.css";

export const mediaCollections = [
  { id: "photo-services", appIds: catalogGroups.photos },
  { id: "vision-services", appIds: catalogGroups.vision },
  { id: "health-services", appIds: catalogGroups.wellbeing },
  { id: "everyday-services", appIds: catalogGroups.everyday },
] as const;

const copy = {
  ko: [
    { title: "사진을 다루는 도구", description: "인물 사진을 다듬고, 추억과 러닝 기록을 담거나 두 화면으로 이어지는 구성을 만들어요." },
    { title: "영상에서 알아보는 도구", description: "물체를 찾아 세거나 운동 동작을 분석해요. 인식 결과는 직접 확인하고 고칠 수 있어요." },
    { title: "건강", description: "플랭크 루틴을 이어 가고, 잠든 밤의 기록을 돌아봐요." },
    { title: "생활·소통", description: "함께 갈 길을 그리고, 날씨를 살피고, 짧은 마음을 전해요." },
  ],
  en: [
    { title: "Tools for your photos", description: "Refine portraits, frame memories and running records, or compose two connected canvases." },
    { title: "Tools that understand motion", description: "Find and count objects, or analyze exercise movements. Review and correct recognition results yourself." },
    { title: "Health", description: "Keep a plank routine and look back on your nights of sleep." },
    { title: "Everyday & connections", description: "Plan routes together, check the weather, and send a heartfelt note." },
  ],
  ja: [
    { title: "写真を扱う道具", description: "人物写真を整え、思い出やランニング記録を残し、つながる二つの画面をつくります。" },
    { title: "映像から見つける道具", description: "物体を見つけて数えたり、運動の動きを分析したり。認識結果は自分で確認・修正できます。" },
    { title: "健康", description: "プランクを続け、眠った夜の記録を振り返ります。" },
    { title: "暮らし・つながり", description: "一緒に行く道を描き、天気を確かめ、短い想いを届けます。" },
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
