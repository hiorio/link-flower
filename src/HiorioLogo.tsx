type LogoTone = "cobalt" | "black" | "white" | "black-on-cobalt";

const crops = {
  cobalt: { symbol: "253 153 752 730", wordmark: "203 916 850 182" },
  black: { symbol: "264 175 725 702", wordmark: "230 908 795 166" },
  white: { symbol: "270 170 710 695", wordmark: "230 896 795 168" },
  "black-on-cobalt": { symbol: "253 153 752 730", wordmark: "203 916 850 182" },
};

/** Viewports frame the approved artwork; the original logo pixels are retained. */
export function HiorioLogo({ basePath, part = "symbol", tone = "cobalt", className = "" }: {
  basePath: string;
  part?: "symbol" | "wordmark" | "lockup";
  tone?: LogoTone;
  className?: string;
}) {
  return <svg className={`hiorio-logo hiorio-logo-${part} hiorio-logo-${tone} ${className}`} viewBox={part === "lockup" ? "0 0 1254 1254" : crops[tone][part]} aria-hidden="true" focusable="false">
    <image href={`${basePath}branding/hiorio-${tone}.webp`} x="0" y="0" width="1254" height="1254" />
  </svg>;
}
