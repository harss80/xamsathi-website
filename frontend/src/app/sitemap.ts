import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.xamsathi.in";
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${base}/courses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/news`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/tests`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/live-classes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/refund`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/search`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.4,
    },
    ...[
      '/blog',
      '/blog/how-to-prepare-for-jee-in-90-days',
      '/blog/neet-biology-study-guide',
      '/blog/updated-exam-syllabus-2025',
      '/blog/top-mock-test-mistakes',
      '/dashboard/test-series/neet',
      '/dashboard/test-series/cbse',
      '/dashboard/test-series/premium-jee-main-copy-mocks'
    ].map(route => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
  return routes;
}
