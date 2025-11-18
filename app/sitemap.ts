import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://developers.wallstreetsilver.com';

  // Get all content slugs
  const [docSlugs, blogSlugs, researchSlugs] = await Promise.all([
    getAllSlugs('docs'),
    getAllSlugs('blog'),
    getAllSlugs('research'),
  ]);

  // Static pages
  const staticPages = [
    '',
    '/docs',
    '/blog',
    '/research',
    '/roadmap',
    '/careers',
    '/contact',
    '/status',
    '/legal/privacy',
    '/legal/terms',
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  // Dynamic content pages
  const docPages = docSlugs.map((slug) => ({
    url: `${siteUrl}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const researchPages = researchSlugs.map((slug) => ({
    url: `${siteUrl}/research/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...docPages, ...blogPages, ...researchPages];
}
