"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { handleAnchorClick } from "@/app/lib/scroll";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "glass";
  className?: string;
  external?: boolean;
  download?: boolean | string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const variants = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_8px_24px_rgb(28_36_52/0.18)] hover:bg-foreground hover:-translate-y-0.5",
  secondary:
    "glass text-foreground hover:bg-white/80 hover:-translate-y-0.5",
  ghost: "text-muted hover:text-foreground hover:bg-white/40",
  glass:
    "glass-strong text-foreground hover:bg-white/90 hover:-translate-y-0.5",
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
