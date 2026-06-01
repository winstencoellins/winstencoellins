"use client";

import Image from "next/image";
import { useState } from "react";

type TechStackIconProps = {
  name: string;
  icon?: string;
  color?: string;
};

function iconSrc(slug: string, color?: string) {
  return color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;
}

export function TechStackIcon({ name, icon, color }: TechStackIconProps) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return (
      <span className="px-1 text-center text-[10px] font-semibold leading-tight text-foreground">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={iconSrc(icon, color)}
      alt={`${name} logo`}
      width={36}
      height={36}
      className="h-9 w-9 object-contain"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
