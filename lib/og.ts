/**
 * Open Graph image generation utilities
 */

export interface OGImageParams {
  title: string;
  description?: string;
  type?: 'website' | 'article';
}

/**
 * Generate OG image URL for dynamic image generation
 * In production, integrate with @vercel/og or similar
 */
export function getOGImageUrl(_params: OGImageParams): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://developers.wallstreetsilver.com';

  // For v1, use static default image
  // Future: implement dynamic OG image generation via /api/og route
  return `${siteUrl}/og-default.png`;
}

/**
 * Generate metadata for a page
 */
export function generateMetadata(params: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://developers.wallstreetsilver.com';
  const fullUrl = params.path ? `${siteUrl}${params.path}` : siteUrl;
  const ogImage = params.image || getOGImageUrl({ title: params.title, type: params.type });

  return {
    title: params.title,
    description: params.description,
    openGraph: {
      title: params.title,
      description: params.description,
      url: fullUrl,
      siteName: 'Wall Street Silver',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: params.title,
        },
      ],
      locale: 'en_US',
      type: params.type || 'website',
      ...(params.publishedTime && { publishedTime: params.publishedTime }),
      ...(params.tags && { tags: params.tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
