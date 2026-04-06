import type { Spot } from "@/domain/curated-experience";

export const V4_SPOTS: Spot[] = [
  {
    id: "spot-teahouse-itaewon",
    slug: "still-teahouse-itaewon-hill",
    name: "스틸 티하우스 · 이태원 능선",
    city: "서울",
    district: "용산",
    category: "차 · 쉼",
    vibeTags: ["조용", "따뜻한 조명", "솔로 친화"],
    bestTime: ["afternoon", "evening"],
    priceLevel: 2,
    images: ["/images/hero/seoul3_Dokebi_Gamgodang-gil.jpg"],
    shortDescription:
      "오르막 전 숨 고를 곳입니다. 대화는 적고 시야는 열려 있어, 도심 안에서도 차분함을 유지하기 좋습니다.",
    bestFor: ["솔로", "둘이서", "감각 부담을 줄이고 싶을 때"],
    cautionNotes: ["젖은 날 오르막은 미끄러울 수 있어 여유 8분 정도 더 두세요."],
    coordinates: { lat: 37.5341, lng: 126.9944 },
    routeRefs: ["quiet-late-gangnam-corridor", "first-night-seoul-north-south"],
    crowdRisk: "low",
    photoTone: "따뜻한 실내, 부드러운 대비",
    nearbyNextStopId: "spot-bookstore-hannam",
    routeInclusionNote: "대중교통 소음과 능선 산책 사이, 감정의 다운시프트를 담당합니다.",
  },
  {
    id: "spot-bookstore-hannam",
    slug: "depth-books-hannam",
    name: "뎁스 북스 · 한남",
    city: "서울",
    district: "용산",
    category: "서점 · 둘러보기",
    vibeTags: ["에디토리얼", "느린 둘러보기", "비 오는 날"],
    bestTime: ["afternoon", "evening"],
    priceLevel: 2,
    images: ["/images/hero/seoul4_aManWhoLivesWithAKing_Gyeongbokgung.jpg"],
    shortDescription:
      "선반이 리듬을 만들어 줍니다. 쇼핑보다는 ‘혼자 있어도 자연스러운 실내’가 필요할 때 적합합니다.",
    bestFor: ["인트로버트", "비 플랜", "짧은 리셋"],
    cautionNotes: ["주말 오후에는 카페 카운터에 줄이 생길 수 있습니다."],
    coordinates: { lat: 37.5365, lng: 126.998 },
    routeRefs: ["quiet-late-gangnam-corridor"],
    crowdRisk: "medium",
    photoTone: "중성적인 종이 톤, 잉크 블랙",
    nearbyNextStopId: "spot-river-banpo",
    routeInclusionNote: "찻집의 차분함과 하늘 열린 산책 사이를 부드럽게 잇습니다.",
  },
  {
    id: "spot-river-banpo",
    slug: "banpo-river-walk-south",
    name: "반포 한강 산책 · 남쪽 둔치",
    city: "서울",
    district: "서초",
    category: "산책 · 야외",
    vibeTags: ["하늘 열림", "이동", "밤 산책"],
    bestTime: ["evening", "late_night"],
    priceLevel: 1,
    images: ["/images/hero/seoul5_NSeoulTower.jpg"],
    shortDescription:
      "길이 넓고 조명과 통행 패턴이 읽기 쉽습니다. 결정을 자주 내리지 않고 걷고 싶을 때 쓰는 구간입니다.",
    bestFor: ["솔로 밤 산책", "시차 다리 풀기", "머리 비우기"],
    cautionNotes: ["강바람이 세질 수 있어 겉옷을 가볍게 챙기세요."],
    coordinates: { lat: 37.508, lng: 127.0 },
    routeRefs: ["quiet-late-gangnam-corridor"],
    crowdRisk: "low",
    photoTone: "차가운 야경, 긴 반사",
    routeInclusionNote: "밤에 골목이 적어 방향 감각이 편하고 지평이 열립니다.",
  },
  {
    id: "spot-gwang-craft",
    slug: "gwanghwamun-craft-row",
    name: "광화문 공예 골목",
    city: "서울",
    district: "종로",
    category: "공예 · 소매",
    vibeTags: ["체험", "낮", "가벼운 문화"],
    bestTime: ["morning", "afternoon"],
    priceLevel: 3,
    images: ["/images/hero/seoul6_BTS_Gwanghwamun.jpg"],
    shortDescription:
      "도자기·종이·소품 등 만드는 과정이 보이는 짧은 스팟들입니다. 박물관 피로 없이 몰입을 유지하기 좋습니다.",
    bestFor: ["가족", "첫 방문", "만지며 보는 걸 좋아하는 분"],
    cautionNotes: ["일부 아틀리에는 오후 4시 이후 예약이 필요할 수 있습니다."],
    coordinates: { lat: 37.576, lng: 126.977 },
    routeRefs: ["first-night-seoul-north-south"],
    crowdRisk: "high",
    photoTone: "밝은 햇빛, 선명한 그림자",
    routeInclusionNote: "남쪽 능선의 차분함과 대비되는, 북쪽의 낮 에너지를 담습니다.",
  },
];

export function getV4SpotBySlug(slug: string): Spot | undefined {
  return V4_SPOTS.find((s) => s.slug === slug);
}

export function getV4SpotById(id: string): Spot | undefined {
  return V4_SPOTS.find((s) => s.id === id);
}
