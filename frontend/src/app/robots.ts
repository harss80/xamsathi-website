import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/*", "/dashboard/profile"],
      },
    ],
    sitemap: "https://www.xamsathi.in/sitemap.xml",
    host: "https://www.xamsathi.in",
  };
}
