import { productApps, appIntroductionHref } from "./apps";
import { AppIcon } from "./AppIcon";
import { ServiceArrow } from "./ServiceArrow";
import { catalogCopy, catalogGroups } from "./catalog";
import type { Locale } from "./i18n";
import "./media-collections.css";

export const mediaCollections = [
  { id: "photo-services", appIds: catalogGroups.photos },
  { id: "vision-services", appIds: catalogGroups.vision },
] as const;

const copy = {
  ko: [
    { title: "사진을 다루는 도구", description: "인물 사진을 다듬고, 추억과 러닝 기록을 담거나 두 화면으로 이어지는 구성을 만들어요." },
    { title: "영상·화면을 살피는 도구", description: "물체를 찾아 세고, 운동 동작을 분석하고, 게임 화면에서 고른 아이콘의 변화를 살펴요." },
  ],
  en: [
    { title: "Tools for your photos", description: "Refine portraits, frame memories and running records, or compose two connected canvases." },
    { title: "Tools for video and screens", description: "Count objects, analyze exercise movements, or watch changes in an icon you choose on a game screen." },
  ],
  ja: [
    { title: "写真を扱う道具", description: "人物写真を整え、思い出やランニング記録を残し、つながる二つの画面をつくります。" },
    { title: "映像・画面を観察する道具", description: "物体を数え、運動の動きを分析し、ゲーム画面で選んだアイコンの変化を観察します。" },
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
