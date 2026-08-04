import type { MetadataRoute } from "next";
import { firm } from "@/content/firm";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: firm.name,
    short_name: firm.shortName,
    description: firm.description,
    start_url: "/",
    display: "standalone",
    background_color: "#062f2e",
    theme_color: "#0c6b68",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
