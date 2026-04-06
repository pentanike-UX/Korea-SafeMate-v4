/** 탐색 패널 빠른 필터 버튼 id (라벨은 메시지에서). */
export const EXPLORE_QUICK_FILTERS = ["calm", "night", "solo", "river"] as const;
export type ExploreQuickFilterId = (typeof EXPLORE_QUICK_FILTERS)[number];

export function isExploreQuickFilterId(v: string): v is ExploreQuickFilterId {
  return (EXPLORE_QUICK_FILTERS as readonly string[]).includes(v);
}

/** 한·영 카피가 섞여도 동일 의미 필터가 동작하도록 키워드 매칭. */
export function exploreMatchesQuickFilter(filterId: ExploreQuickFilterId, parts: string[]): boolean {
  const text = parts.join(" ");
  switch (filterId) {
    case "calm":
      return /차분|조용|calm|quiet|고요|여유|편안/i.test(text);
    case "night":
      return /밤|야간|night|late|늦은/i.test(text);
    case "solo":
      return /솔로|solo|혼자/i.test(text);
    case "river":
      return /한강|강변|river|banpo|반포/i.test(text);
    default:
      return false;
  }
}
