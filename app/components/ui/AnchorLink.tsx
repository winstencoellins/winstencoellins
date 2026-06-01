"use client";

import type { ReactNode } from "react";
import { handleAnchorClick } from "@/app/lib/scroll";

type AnchorLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

export function AnchorLink({
  href,
  children,
  className,
  onClick,
  "aria-label": ariaLabel,
}: AnchorLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={(event) => {
        handleAnchorClick(event, href);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
