import { defineRouting } from "next-intl/routing";

/**
 * App locales: Korean (default), English, Japanese.
 * URL: `ko` has no prefix; `en` / `ja` use `/en`, `/ja` (`as-needed`).
 * Cookie NEXT_LOCALE remembers choice (next-intl / proxy).
 */
export const routing = defineRouting({
  locales: ["en", "ko", "ja"],
  defaultLocale: "ko",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
