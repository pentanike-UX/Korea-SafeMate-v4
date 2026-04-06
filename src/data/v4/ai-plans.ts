import type { AIPlanOutput, AIPlannerInput } from "@/domain/curated-experience";
import { getV4RouteBySlug } from "@/data/v4/routes";

/** Deterministic mock: hash-ish from string for stable demo IDs */
function shortId(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return `plan-${Math.abs(h).toString(36)}`;
}

export function buildMockAIPlan(inputs: AIPlannerInput): AIPlanOutput {
  const key = JSON.stringify(inputs);
  const eveningLate =
    inputs.timeBudget === "full_evening" ||
    inputs.vibe === "calm" ||
    inputs.timeOfDay === "evening" ||
    inputs.timeOfDay === "late_night";
  const primarySlug = eveningLate ? "quiet-late-gangnam-corridor" : "first-night-seoul-north-south";
  const altSlug = primarySlug === "quiet-late-gangnam-corridor" ? "first-night-seoul-north-south" : "quiet-late-gangnam-corridor";
  const primaryRoute = getV4RouteBySlug(primarySlug);

  return {
    id: shortId(key),
    inputs,
    routeId: primaryRoute?.id ?? "route-unknown",
    outputSummary:
      inputs.companions === "solo" && inputs.safetySensitive === "high"
        ? "밤에는 길이 넓은 세 스팟을 순서대로, 환승을 최소화한 코스입니다."
        : "앉아 쉼 → 구조화된 둘러보기 → 선택적 실외 마무리로 속도를 맞춘 순서입니다.",
    routesSuggested: [primarySlug, altSlug],
    rationale:
      inputs.weatherSensitive
        ? "중간은 실내 비중이 크고, 날씨가 바뀌면 강 구간은 생략 가능으로 표시했습니다."
        : "체력이 불확실할 때 결정 포인트를 줄이기 위해 배치했습니다. 각 스팟마다 ‘여기까지’ 신호가 분명합니다.",
    expectedMood:
      inputs.vibe === "romantic"
        ? "가깝고 조용하며 읽기 쉬운 밤"
        : inputs.vibe === "lively"
          ? "따뜻하지만 술집 거리에 끌려가지 않는 분위기"
          : "여유 있고 눈이 맑아지는 흐름",
    timingTips: [
      "‘문 나서기’ 목표 시각 기준 45분 안에 첫 스팟에 들어가는 것을 권합니다.",
      "일정이 밀리면 마지막 스팟을 빼도 동선은 성립합니다.",
    ],
    cautions:
      inputs.safetySensitive === "high"
        ? ["1–2 스팟 사이 지름길 골목은 피하고, 조도 있는 메인 통로를 유지하세요."]
        : ["주말 밤 유흥가 인근은 10–15분 버퍼를 두고 환승을 잡으세요."],
    alternativeRouteSlug: altSlug,
    createdAt: new Date().toISOString(),
  };
}
