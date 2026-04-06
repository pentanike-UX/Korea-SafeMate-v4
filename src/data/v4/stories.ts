import type { StoryArticleV4 } from "@/domain/curated-experience";

export const V4_STORIES: StoryArticleV4[] = [
  {
    slug: "first-night-seoul-decisions",
    title: "서울 첫날 밤: 결정은 줄이고, 도시는 그대로",
    deck: "도착일에 최적화할 것과 일부러 미룰 것.",
    coverImage: "/images/hero/seoul1_BTS_Sungnyemun.jpg",
    readingMinutes: 6,
    tags: ["도착", "속도", "저녁"],
    decisionFocus: "세 가지 테마가 아니라, 한 가지 대비(남북 또는 실내/실외)만 고르기.",
    bodyParagraphs: [
      "도착일에는 순서를 선언한 동선이 이깁니다: 앵커, 대비, 선택적 마무리. 첫날 밤을 체크리스트처럼 채우는 것이 흔한 실수입니다.",
      "시차가 크면 밤 8시 이후에는 넓은 길과 앉아 쉬는 스팟에 치우치세요. 골목의 매력은 나중으로 미뤄도 됩니다.",
      "순서를 미리 짜두고 싶다면 ‘첫날 밤 · 남북 균형’ 동선과 함께 읽어보세요.",
    ],
    relatedRouteSlugs: ["first-night-seoul-north-south"],
    status: "published",
  },
  {
    slug: "quiet-late-date-walk",
    title: "늦은 조용한 산책: ‘로맨틱’이 읽기 쉽다는 뜻일 때",
    deck: "혼잡 리스크는 낮게, 시야는 열리게—소리치지 않고 대화할 여지.",
    coverImage: "/images/hero/seoul2_MyLoveFromTheStar_NSeoulTower.jpg",
    readingMinutes: 5,
    tags: ["늦은 밤", "커플", "안전"],
    decisionFocus: "밤 10시 이후에는 새로움보다 예측 가능성을 우선합니다.",
    bodyParagraphs: [
      "커플 야간 동선은 거리보다 감각 부담에서 자주 깨집니다. 이 글은 차 → 둘러보기 → 강 순서에 무게를 둡니다.",
      "한쪽이 소음에 민감하면 스팟 사이 술집 거리를 피하세요. 지도상 짧아 보여도 부담이 클 수 있습니다.",
    ],
    relatedRouteSlugs: ["quiet-late-gangnam-corridor"],
    status: "published",
  },
  {
    slug: "solo-traveler-safe-walk-frame",
    title: "솔로 산책: ‘충분히 안전’을 말하는 틀",
    deck: "혼잡도, 조명, 퇴로를 어떻게 라벨하는지—공포 카피 없이.",
    coverImage: "/images/hero/seoul5_NSeoulTower.jpg",
    readingMinutes: 7,
    tags: ["솔로", "밤", "리스크 표현"],
    decisionFocus: "동선 카드의 주의 문구는 작은 글씨가 아니라 게이트로 쓰기.",
    bodyParagraphs: [
      "혼잡 리스크와 개인적인 편안함은 구분합니다. ‘낮음’인 스팟도 리테일 소음을 싫어하면 부담될 수 있습니다.",
      "밤에는 한강 구간이 안심되는 경우가 많습니다. 모서리가 적고 지평이 열립니다.",
    ],
    relatedRouteSlugs: ["quiet-late-gangnam-corridor"],
    status: "published",
  },
  {
    slug: "rainy-day-indoor-spine",
    title: "비 오는 날: 움직임이 있는 실내 축",
    deck: "무드 유지에는 쇼핑몰 루프보다 서점·찻집이 낫다는 이유.",
    coverImage: "/images/hero/seoul4_aManWhoLivesWithAKing_Gyeongbokgung.jpg",
    readingMinutes: 4,
    tags: ["비", "실내", "속도"],
    decisionFocus: "노출 도보 전환은 10분 이내로 유지.",
    bodyParagraphs: [
      "단조로움 없이 연속성을 주는 것이 목표입니다. 앉았다가 둘러보는 자세를 번갈아 여행같은 하루로 느끼게 합니다.",
    ],
    relatedRouteSlugs: ["quiet-late-gangnam-corridor"],
    status: "published",
  },
];

export function getV4StoryBySlug(slug: string): StoryArticleV4 | undefined {
  return V4_STORIES.find((s) => s.slug === slug);
}

export function listPublishedV4Stories(): StoryArticleV4[] {
  return V4_STORIES.filter((s) => s.status === "published");
}
