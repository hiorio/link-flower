export function ServiceArrow({ direction = "right" }: { direction?: "right" | "left" | "external" }) {
  const rotation = direction === "left" ? 180 : direction === "external" ? -45 : 0;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flexShrink: 0, transform: `rotate(${rotation}deg)` }}><path d="M4 12h15M13 6l6 6-6 6" /></svg>;
}
