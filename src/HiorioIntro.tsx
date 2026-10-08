import { HiorioLogo } from "./HiorioLogo";
import { ServiceArrow } from "./ServiceArrow";
import { blueMoonCopy } from "./bluemoon-content";
import { ui, type Locale } from "./i18n";

export function HiorioIntro({ locale, basePath }: { locale: Locale; basePath: string }) {
  const copy = blueMoonCopy[locale];
  return <section className="hiorio-intro" aria-labelledby="hiorio-title">
    <div className="hiorio-masthead" aria-label="HIORIO" role="img"><HiorioLogo basePath={basePath} part="wordmark" /></div>
    <div className="hiorio-intro-bottom">
      <h1 id="hiorio-title">{copy.makerPromise}</h1>
      <div className="hiorio-intro-note"><p>{copy.creator}</p><a href="#work-index">{ui[locale].appsBrowseLabel}<ServiceArrow /></a></div>
    </div>
  </section>;
}
