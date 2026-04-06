# 05 — Design rules

## 원천

- 글로벌 토큰: `src/app/globals.css` (CSS 변수: `--brand-*`, `--radius-*`, `--bg-*` 등).
- v4 큐레이션 UI: “pearl/cobalt” 톤 언급은 **커밋 `2fcfa04` 본문**에 근거. 세부 팔레트는 **코드 변수가 정본**.

## 워크스페이스 (Wayly UX, 커밋·코드 기준)

- **라이트 프리미엄**: 밝은 서피스, 넓고 약한 그림자, 코너 **약 20–28px** 계열.
- 지도가 **주 무대**; 정보는 패널·시트·최소 플로팅 칩.
- **글래스/그라데이션 남용 금지** (요구사항 이력 반영).

## 컴포넌트

- 버튼·시트: Base UI + 프로젝트 `components/ui/*`.
- 아이콘: Lucide.

## 접근성

- 레일·탭: `aria-label`, `sr-only` 패턴 사용 (코드 확인).
- TODO: 포커스 트랩·시트 키보드 전체 감사는 별도 QA.

## Cursor 규칙 연동

- 모바일 우선, empty/loading/error 누락 금지 → `.cursor/rules` 참고.
