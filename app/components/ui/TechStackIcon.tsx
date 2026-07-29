"use client";

import Image from "next/image";
import { useState } from "react";

type TechStackIconProps = {
  name: string;
  icon?: string;
  color?: string;
  src?: string;
  size?: "sm" | "md";
};

function iconSrc(slug: string, color?: string) {
  return color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;
}

export function TechStackIcon({
  name,
  icon,
  color,
  src,
  size = "sm",
}: TechStackIconProps) {
  const [failed, setFailed] = useState(false);
  const dim = size === "md" ? 36 : 24;
  const className = size === "md" ? "h-9 w-9 object-contain" : "h-6 w-6 object-contain";

  if ((!icon && !src) || failed) {
    return (
      <span className="px-1 text-center text-[10px] font-semibold leading-tight text-foreground">
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <Image
      src={src ?? iconSrc(icon!, color)}
      alt={`${name} logo`}
      width={dim}
      height={dim}
      className={className}
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
