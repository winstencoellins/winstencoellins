"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { handleAnchorClick } from "@/app/lib/scroll";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  download?: boolean | string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const variants = {
  primary:
    "bg-accent text-background hover:opacity-90 hover:shadow-[var(--shadow-hover)]",
  secondary:
    "border border-border bg-surface text-foreground hover:border-foreground/30 hover:shadow-[var(--shadow-card)]",
  ghost: "text-foreground hover:bg-foreground/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  external,
  download,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (download !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        download={download === true ? "" : download}
      >
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => handleAnchorClick(event, href)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
