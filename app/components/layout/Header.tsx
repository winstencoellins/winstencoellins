"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/app/lib/data";
import { AnchorLink } from "@/app/components/ui/AnchorLink";
import { Button } from "@/app/components/ui/Button";
import { Container } from "@/app/components/ui/Container";
import { scrollToSection } from "@/app/lib/scroll";

const ThemeToggle = dynamic(
  () =>
    import("@/app/components/ui/ThemeToggle").then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => (
      <span
        className="inline-block h-9 w-9 shrink-0 rounded-full border border-border bg-surface"
        aria-hidden
      />
    ),
  },
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) scrollToSection(hash);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/95 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <AnchorLink
            href="#home"
            className="text-sm font-semibold tracking-tight text-foreground"
            aria-label={`${site.name} home`}
          >
            {site.name.split(" ")[0]}
            <span className="text-muted">.</span>
          </AnchorLink>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <AnchorLink
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </AnchorLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
              Available for Work
            </span>
            <ThemeToggle />
            <Button href="#contact" variant="primary" className="hidden sm:inline-flex">
              Get in Touch
            </Button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-foreground/5 md:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
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

        {menuOpen && (
          <nav
            className="border-t border-border py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <AnchorLink
                    href={link.href}
                    className="block py-2 text-sm text-muted hover:text-foreground"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
              <li className="pt-2">
                <Button href="#contact" variant="primary" className="w-full">
                  Get in Touch
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
