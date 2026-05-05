import type { MetadataRoute } from 'next';
import { sitemapXmlRoutes } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-29T00:00:00+05:30');

  return sitemapXmlRoutes.map((route) => ({
    url: `https://veyber.co.in${route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/services' || route === '/contact' || route === '/sitemap' ? 0.9 : 0.8,
  }));
}
