/**
 * UX 검증용: API 없이 정적 목업만 쓸 때 `NEXT_PUBLIC_UX_VERIFICATION=1` 로 켭니다.
 * 가디언 저장·매칭·부킹 시트 등 클라이언트 `fetch`를 건너뜁니다.
 */
export function isUxVerificationMode(): boolean {
  return process.env.NEXT_PUBLIC_UX_VERIFICATION === "1";
}
