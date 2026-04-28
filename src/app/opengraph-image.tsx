import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = `${siteConfig.name} mobile hibachi catering`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function imageMimeType(filePath: string) {
  if (filePath.endsWith(".png")) {
    return "image/png";
  }

  return "image/jpeg";
}

async function loadPublicImage(relativePath: string) {
  const absolutePath = path.join(process.cwd(), "public", relativePath.replace(/^\//, ""));
  const file = await readFile(absolutePath);

  return `data:${imageMimeType(relativePath)};base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [logo, primaryPhoto, chefPhoto, foodPhoto] = await Promise.all([
    loadPublicImage("/images/logo.png"),
    loadPublicImage("/images/menu-hibachi-table-1.png"),
    loadPublicImage("/images/menu-hibachi-table-2.png"),
    loadPublicImage("/images/gallery5.jpg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #081117 0%, #132033 48%, #0f1a21 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at top left, rgba(251, 143, 44, 0.22), transparent 34%), radial-gradient(circle at bottom right, rgba(251, 143, 44, 0.18), transparent 28%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "58%",
            padding: "54px 0 54px 58px",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1,
            gap: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 96,
                  height: 96,
                  borderRadius: 24,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <img
                  src={logo}
                  alt="Hibachi CU logo"
                  width={78}
                  height={38}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: 22,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.76)",
                }}
              >
                <span>Hibachi CU</span>
                <span style={{ color: "#fb8f2c", letterSpacing: 3, marginTop: 6 }}>
                  Live Chef Catering
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                padding: "12px 20px",
                borderRadius: 999,
                background: "rgba(251, 143, 44, 0.14)",
                border: "1px solid rgba(251, 143, 44, 0.35)",
                color: "#ffd3a8",
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 22,
              }}
            >
              Backyard Parties • Private Dinners • Vacation Rentals
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 64,
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: -2,
              }}
            >
              <span>Mobile Hibachi</span>
              <span style={{ color: "#fb8f2c" }}>Catering</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: 28,
                lineHeight: 1.25,
                color: "rgba(255,255,255,0.86)",
                maxWidth: 540,
              }}
            >
              Private hibachi chef at home with live grill cooking, fresh ingredients,
              and a full on-site setup.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              {["Transparent Pricing", "Live Grill Show", "At-Home Experience"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "9px 14px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 18,
                    color: "rgba(255,255,255,0.86)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: 24,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              <span>{siteConfig.phoneDisplay}</span>
              <span style={{ color: "#fb8f2c" }}>hibachicu.com</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "42%",
            padding: "40px 40px 40px 0",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              borderRadius: 34,
              overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "64%",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src={primaryPhoto}
                alt="Backyard hibachi chef cooking for guests"
                width={380}
                height={550}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  background:
                    "linear-gradient(180deg, rgba(8,17,23,0.05) 0%, rgba(8,17,23,0.45) 100%)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                width: "36%",
                flexDirection: "column",
                gap: 14,
                padding: 14,
                background: "rgba(9,16,22,0.78)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={chefPhoto}
                  alt="Chef cooking shrimp on a hibachi grill"
                  width={200}
                  height={250}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  borderRadius: 24,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={foodPhoto}
                  alt="Fried rice on an outdoor hibachi grill"
                  width={200}
                  height={250}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
