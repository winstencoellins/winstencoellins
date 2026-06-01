import type { MouseEvent } from "react";

/** Fixed header height + breathing room for in-page anchor targets */
export const SCROLL_OFFSET = 88;

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;

  const id = href.slice(1);
  if (!id) return;

  event.preventDefault();
  scrollToSection(id);
}
