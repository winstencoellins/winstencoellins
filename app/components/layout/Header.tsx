"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/app/lib/data";
import { AnchorLink } from "@/app/components/ui/AnchorLink";
import { Container } from "@/app/components/ui/Container";
import { scrollToSection } from "@/app/lib/scroll";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Jakarta",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(timeFormatter.format(new Date()).toLowerCase());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hidden text-right sm:block"
      aria-label="Local time in Medan, Indonesia"
    >
      <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
        Medan
      </p>
      <p className="text-xs font-medium tabular-nums text-foreground">
        {time ?? "\u00A0"}
      </p>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) scrollToSection(hash);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <Container className="!px-0">
        <div
          className={`glass-nav overflow-hidden rounded-2xl transition-shadow duration-300 ${
            scrolled || menuOpen ? "shadow-[var(--shadow-hover)]" : ""
          }`}
        >
          <div className="flex h-14 items-center justify-between gap-4 px-4 md:h-16 md:px-6">
            <AnchorLink
              href="#home"
              className="text-sm font-semibold tracking-tight text-foreground"
              aria-label={`${site.name} home`}
            >
              {site.name.split(" ")[0]}
            </AnchorLink>

            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <AnchorLink
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-white/50 hover:text-foreground"
                >
                  {link.label}
                </AnchorLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LocalTime />
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/50 text-foreground transition-colors hover:bg-white md:hidden"
                aria-expanded={menuOpen}
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  {menuOpen ? (
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 8h16M4 16h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav
              className="border-t border-border px-4 py-3 md:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <AnchorLink
                      href={link.href}
                      className="block rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-white/60 hover:text-foreground"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
