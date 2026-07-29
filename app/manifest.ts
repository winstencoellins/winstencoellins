import type { MetadataRoute } from "next";
import { site } from "@/app/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.title}`,
    short_name: site.name.split(" ")[0],
    description: site.seoDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7fb",
    theme_color: "#f5f7fb",
    icons: [
      {
        src: "/icon.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
