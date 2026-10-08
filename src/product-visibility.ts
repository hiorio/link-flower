// Personal projects without a verified public destination do not belong in this showcase.
// Keep their source records locally; omit them from navigation, routing and static entries.
export const privateProductIds = ["deepplayer", "huntlog", "ai-ocr", "autotrade"] as const;

export function isPublicProduct(id: string) {
  return !privateProductIds.some((privateId) => privateId === id);
}
