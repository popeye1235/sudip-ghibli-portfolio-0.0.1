import { ImageResponse } from "next/og";

export const alt = "Sudip Mishra, Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time by Next.js: no image file or design tool needed.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #f3e3bd 0%, #ead7a6 100%)",
          color: "#5a3e12",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, color: "#7a8f3a", fontWeight: 600 }}>
          Frontend Engineer
        </div>
        <div style={{ display: "flex", fontSize: 108, fontWeight: 800, marginTop: 12 }}>
          Sudip Mishra
        </div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 28, lineHeight: 1.35, maxWidth: 940 }}>
          React · Next.js · Angular. Fintech, EdTech and GenAI products built to feel calm and trustworthy.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 28,
            color: "#fff",
            background: "#7a8f3a",
            padding: "12px 28px",
            borderRadius: 999,
            alignSelf: "flex-start",
          }}
        >
          sudip-ghibli-portfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
