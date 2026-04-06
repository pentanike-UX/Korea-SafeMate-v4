"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useAuthUser } from "@/hooks/use-auth-user";
import { cn } from "@/lib/utils";
import { Bookmark, Compass, Home, Sparkles, UserRound } from "lucide-react";

const ITEMS: {
  href: string;
  msgKey: "home" | "explore" | "ai" | "saved" | "my";
  Icon: typeof Home;
  match: (p: string) => boolean;
}[] = [
  { href: "/", msgKey: "home", Icon: Home, match: (p) => p === "/" || p === "" },
  {
    href: "/explore/routes",
    msgKey: "explore",
    Icon: Compass,
    match: (p) => p.startsWith("/explore"),
  },
  { href: "/planner", msgKey: "ai", Icon: Sparkles, match: (p) => p.startsWith("/planner") },
  {
    href: "/mypage/saved",
    msgKey: "saved",
    Icon: Bookmark,
    match: (p) => p.startsWith("/mypage/saved"),
  },
  {
    href: "/mypage",
    msgKey: "my",
    Icon: UserRound,
    match: (p) => p.startsWith("/mypage") && !p.startsWith("/mypage/saved"),
  },
];

export function V4MobileBottomNav({ variant = "bar" }: { variant?: "bar" | "floating" }) {
  const pathname = usePathname();
  const t = useTranslations("V4.bottomNav");
  const user = useAuthUser();
  const floating = variant === "floating";

  const savedHref = user ? "/mypage/saved" : "/login?next=/mypage/saved";
  const myHref = user ? "/mypage" : "/login?next=/mypage";

  return (
    <nav
      className={cn(
        "z-50 flex pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden",
        floating
          ? "border-border/50 bg-[color-mix(in_srgb,var(--bg-surface)_92%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--bg-surface)_86%,transparent)] fixed right-4 bottom-4 left-4 rounded-[28px] border shadow-[0_20px_56px_rgba(15,23,42,0.09)]"
          : "border-border/60 bg-[color-mix(in_srgb,var(--bg-surface)_94%,transparent)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,var(--bg-surface)_88%,transparent)] fixed right-0 bottom-0 left-0 border-t",
      )}
      aria-label={t("aria")}
    >
      {ITEMS.map((item) => {
        const href =
          item.msgKey === "saved" ? savedHref : item.msgKey === "my" ? myHref : item.href;
        const active = item.match(pathname);
        const Icon = item.Icon;
        return (
          <Link
            key={item.msgKey}
            href={href}
            className={cn(
              "text-muted-foreground flex min-h-[var(--touch-target)] flex-1 flex-col items-center justify-center gap-0.5 py-1.5 text-[10px] font-medium transition-colors duration-200",
              active && "text-[var(--brand-trust-blue)]",
            )}
          >
            <Icon className={cn("size-5", active && "text-[var(--brand-trust-blue)]")} strokeWidth={1.75} aria-hidden />
            <span className="max-w-[4.5rem] truncate">{t(item.msgKey)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
