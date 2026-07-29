import { ImageResponse } from "next/og";
import { site } from "@/app/lib/data";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(145deg, #fafbfd 0%, #f3f6fa 45%, #e8eef6 100%)",
          color: "#16181d",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(22,24,29,0.08)",
              fontSize: 40,
              color: "#16181d",
            }}
          >
            W
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#3d6b8c",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -1.5 }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#6b7280",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              marginTop: 8,
              maxWidth: 820,
              fontSize: 24,
              lineHeight: 1.45,
              color: "#6b7280",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Building reliable web apps, APIs, and data-backed products — remote
            and on-site.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 20,
            color: "#3d6b8c",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          <span>Medan, Indonesia</span>
          <span style={{ color: "#cbd5e1" }}>·</span>
          <span>Open to opportunities</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
