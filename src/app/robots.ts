import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${resolveSiteUrl()}/sitemap.xml`,
  };
}
