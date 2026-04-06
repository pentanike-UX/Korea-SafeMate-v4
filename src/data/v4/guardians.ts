import type { GuardianProfileV4 } from "@/domain/curated-experience";

export const V4_GUARDIANS: GuardianProfileV4[] = [
  {
    id: "g-v4-minseo",
    slug: "minseo",
    displayName: "민서",
    languages: ["한국어", "영어"],
    specialtyAreas: ["종로", "용산", "서초"],
    specialtyVibes: ["첫날 밤", "가족 동행", "비 오는 날 플랜 B"],
    availability: "평균 6시간 내 답변 · 저녁(KST) 위주",
    avatar: "/images/hero/seoul3_Dokebi_Gamgodang-gil.jpg",
    cover: "/images/hero/seoul6_BTS_Gwanghwamun.jpg",
    shortBio:
      "갈림길을 줄이고 싶은 분들의 저녁 동선을 짜는 데 익숙합니다. 통화 전 짧은 글 브리프를 선호합니다.",
    trustSignals: ["에디토리얼 동선 공동 작성", "처리 요청 120건 이상", "이중언어 브리프"],
    status: "active",
  },
  {
    id: "g-v4-jun",
    slug: "jun",
    displayName: "준",
    languages: ["한국어", "영어", "일본어"],
    specialtyAreas: ["강남", "송파"],
    specialtyVibes: ["늦은 밤", "솔로", "저자극"],
    availability: "주말 · 늦은 시간대 가능",
    avatar: "/images/hero/seoul5_NSeoulTower.jpg",
    cover: "/images/hero/seoul2_MyLoveFromTheStar_NSeoulTower.jpg",
    shortBio:
      "밤 통로와 환승을 최소화하는 데 집중합니다. 지도가 도시보다 시끄럽게 느껴질 때 도움이 됩니다.",
    trustSignals: ["야간 동선 전문", "환승 스트레스 맵핑", "명확도 평균 4.9"],
    status: "active",
  },
];

export function getV4GuardianBySlug(slug: string): GuardianProfileV4 | undefined {
  return V4_GUARDIANS.find((g) => g.slug === slug);
}
