// Fixed explanatory fixtures, not live weather or accuracy measurements.
export const weatherHours = [6, 8, 10, 12, 14, 16, 18] as const;
export type WeatherPoint = { hour: number; time: string; forecast: number; observed: number; forecastRain: boolean; observedRain: boolean };
function points(forecast: number[], observed: number[], forecastRain: number[], observedRain: number[]): WeatherPoint[] {
  return weatherHours.map((hour, index) => ({ hour, time: `${String(hour).padStart(2, "0")}:00`, forecast: forecast[index], observed: observed[index], forecastRain: forecastRain.includes(hour), observedRain: observedRain.includes(hour) }));
}
export const weatherDays = [
  { date: "2026-09-01", issued: "2026-08-31", points: points([21,22,23,24,25,24,23], [21,23,26,28,29,27,25], [12,14,16], []) },
  { date: "2026-09-02", issued: "2026-09-01", points: points([22,23,25,26,25,24,23], [22,23,24,25,25,24,23], [12,14,16], [12,14,16]) },
  { date: "2026-09-03", issued: "2026-09-02", points: points([22,23,25,27,28,26,24], [21,22,23,24,24,23,22], [], [14,16,18]) },
];
export type WeatherView = "both" | "forecast" | "observed";
export function rainVerdict(point: WeatherPoint) {
  if (point.forecastRain && !point.observedRain) return "missedRain";
  if (!point.forecastRain && point.observedRain) return "unexpectedRain";
  return "matched";
}
export const weatherScreenFiles = ["current-home.png", "day-detail.png", "provider-compare.png", "statistics.png"];
