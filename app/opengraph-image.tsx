import { ImageResponse } from "next/og";
import { siteDescription, siteName } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F4EE",
          color: "#2F4F46",
          padding: "72px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid rgba(47,79,70,0.18)",
            borderRadius: "40px",
            padding: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "96px",
                border: "3px solid #2F4F46",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "56px",
                  borderLeft: "4px solid #2F4F46",
                  borderRight: "4px solid #2F4F46",
                  borderRadius: "999px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "64px",
                  lineHeight: 1,
                  fontWeight: 600,
                  letterSpacing: 0,
                }}
              >
                {siteName}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  color: "#7A8F87",
                }}
              >
                Counselling
              </div>
            </div>
          </div>
          <div
            style={{
              maxWidth: "760px",
              fontSize: "34px",
              lineHeight: 1.35,
              color: "#3B5147",
            }}
          >
            {siteDescription}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
