import type { CuratedRoute } from "@/domain/curated-experience";
import { FIRST_NIGHT_PATH_SEGMENTS, QUIET_LATE_PATH_SEGMENTS } from "@/data/v4/route-path-segments.generated";

export const V4_ROUTES: CuratedRoute[] = [
  {
    id: "route-quiet-late-gangnam-alt",
    slug: "quiet-late-gangnam-corridor",
    title: "늦은 밤 조용한 동선 · 강남 가",
    summary: "찻집 → 서점 → 한강 산책. 해 진 뒤 소음을 줄이도록 순서를 맞춘 코스입니다.",
    subtitle: "따뜻한 차, 서가 사이를 걷다가 열린 강변까지—소음을 낮춘 흐름.",
    city: "서울",
    district: "강남·서초",
    vibeTags: ["차분", "늦은 밤", "솔로 친화"],
    bestFor: ["솔로 여행", "쉼이 필요한 동행", "말하기 에너지가 낮을 때"],
    timeOfDay: ["evening", "late_night"],
    durationMinutes: 165,
    budgetLevel: 2,
    transportMode: ["walk", "transit"],
    heroImage: "/images/hero/seoul2_MyLoveFromTheStar_NSeoulTower.jpg",
    pathSegments: QUIET_LATE_PATH_SEGMENTS,
    stops: [
      {
        id: "rs-1",
        spotId: "spot-teahouse-itaewon",
        order: 1,
        stayMinutes: 35,
        transitionHint: "도보 약 12분 · 대부분 조도 있는 간선",
        whyHere: "앉아 쉬고 따뜻한 분위기로 템포를 잡습니다. 오르막 전에 마음을 가라앉히기 좋습니다.",
      },
      {
        id: "rs-2",
        spotId: "spot-bookstore-hannam",
        order: 2,
        stayMinutes: 40,
        transitionHint: "실내 둘러보기 · 예약 없이 가능",
        whyHere: "자극이 구조화되어 있어 피로가 올라오면 빠져나가기 쉽습니다.",
      },
      {
        id: "rs-3",
        spotId: "spot-river-banpo",
        order: 3,
        stayMinutes: 50,
        transitionHint: "강변으로 내려가기 · 길이 넓은 구간",
        whyHere: "길 찾기 부담 없이 움직일 수 있고, 솔로 동선에서도 시야가 열려 안심됩니다.",
      },
    ],
    whyThisRoute:
      "닫힌 공간의 차분함 → 구조화된 둘러보기 → 열린 공간의 이동 순으로 배치했습니다. 밤 9시 이후 ‘다음 어디?’가 불안해지는 순간을 줄입니다.",
    tips: ["해 질 무렵 90분 안에 첫 스팟에 들르는 것을 권합니다.", "두 번째 스팟 이후 지하철은 환승 한 번 이내로 유지하세요."],
    cautions: ["금요일 밤 이태원역 인근은 붐빌 수 있어 메인 술집 거리는 피하는 편이 좋습니다."],
    sourceType: "editorial",
    author: "동선 데스크",
    status: "published",
    confidence: 0.86,
    expectedMood: "여유 있고 살짝 영화 같은 밤",
    alternativeSlug: "first-night-seoul-north-south",
  },
  {
    id: "route-first-night-seoul",
    slug: "first-night-seoul-north-south",
    title: "첫날 밤 · 남북 균형",
    summary: "공예 골목의 여유, 이어 차 한 잔, 선택적으로 한강까지—도착일 리듬에 맞춘 코스입니다.",
    subtitle: "랜드마크 옆을 지나되, 줄 서기만 쫓지 않도록 짰습니다.",
    city: "서울",
    district: "종로·용산",
    vibeTags: ["첫 방문", "균형 잡힌 속도", "오리엔테이션"],
    bestFor: ["서울 첫날", "가족", "시차 적응 중"],
    timeOfDay: ["evening"],
    durationMinutes: 140,
    budgetLevel: 3,
    transportMode: ["walk", "mixed"],
    heroImage: "/images/hero/seoul1_BTS_Sungnyemun.jpg",
    pathSegments: FIRST_NIGHT_PATH_SEGMENTS,
    stops: [
      {
        id: "rs-f1",
        spotId: "spot-gwang-craft",
        order: 1,
        stayMinutes: 45,
        transitionHint: "메인 보행 축을 따라 이동",
        whyHere: "궁궐 일정 전에 문화 감각만 가볍게 쌓을 수 있어 부담이 적습니다.",
      },
      {
        id: "rs-f2",
        spotId: "spot-teahouse-itaewon",
        order: 2,
        stayMinutes: 40,
        transitionHint: "시내 이동 · 환승 한 번",
        whyHere: "낮의 공예 골목과 대비되는, 앉아 쉬는 저녁 무드로 전환합니다.",
      },
      {
        id: "rs-f3",
        spotId: "spot-river-banpo",
        order: 3,
        stayMinutes: 45,
        transitionHint: "피곤하면 3번 스팟 생략 가능",
        whyHere: "선택적 마무리. 체력이 낮으면 2번에서 끝내는 것만으로도 동선이 완성됩니다.",
      },
    ],
    whyThisRoute:
      "도착일 피로와 선택 피로를 동시에 줄이기 위해, 읽기 쉬운 랜드마크와 명확한 마무리를 함께 둡니다.",
    tips: ["비가 오면 3번 대신 2번에서 시간을 늘리는 편이 좋습니다.", "작은 공방 계산은 현금을 조금 챙기세요."],
    cautions: ["명절 저녁 궁궐 인근은 혼잡할 수 있어 15분 여유를 두세요."],
    sourceType: "guardian",
    author: "민서 · 가디언",
    status: "published",
    confidence: 0.78,
    expectedMood: "차분하고 살짝 호기심 있는 밤",
    alternativeSlug: "quiet-late-gangnam-corridor",
  },
];

export function getV4RouteBySlug(slug: string): CuratedRoute | undefined {
  return V4_ROUTES.find((r) => r.slug === slug);
}

export function getV4RouteById(id: string): CuratedRoute | undefined {
  return V4_ROUTES.find((r) => r.id === id);
}

export function listPublishedV4Routes(): CuratedRoute[] {
  return V4_ROUTES.filter((r) => r.status === "published");
}
