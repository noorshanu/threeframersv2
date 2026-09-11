import type { MetadataRoute } from "next";

import { ASSETS, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "MMH",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: ASSETS.favicon,
        sizes: "any",
        type: "image/png",
      },
      {
        src: ASSETS.webclip,
        sizes: "512x512",
        type: "image/avif",
      },
    ],
  };
}
