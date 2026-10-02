import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Phạm Trọng Hải · Kỹ sư phần mềm",
    short_name: "Phạm Trọng Hải",
    description: "Kỹ sư phần mềm và chuyên gia GIS/Bản đồ.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0d0f",
    theme_color: "#0b0d0f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
