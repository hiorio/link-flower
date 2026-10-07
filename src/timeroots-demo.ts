// Illustrative, non-overlapping activity minutes. Never presented as user data.
export const timeRootsDays = Array.from({ length: 28 }, (_, index) => ({
  day: index + 1,
  minutes: [30, 45, 20, 60, 35, 80, 50][index % 7] + Math.floor(index / 7) * 5,
}));
export const timeRootsWeeks = Array.from({ length: 4 }, (_, index) => ({
  start: index * 7 + 1,
  end: index * 7 + 7,
  minutes: timeRootsDays.slice(index * 7, index * 7 + 7).reduce((sum, day) => sum + day.minutes, 0),
}));
