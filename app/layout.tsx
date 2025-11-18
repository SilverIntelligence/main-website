import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://developers.wallstreetsilver.com'
  ),
  title: {
    default: 'Wall Street Silver Developer Hub',
    template: '%s | Wall Street Silver',
  },
  description:
    'Open precious metals analytics and research platform. Developer documentation, APIs, and market research.',
  keywords: ['silver', 'precious metals', 'analytics', 'API', 'market data', 'research'],
  authors: [{ name: 'Wall Street Silver' }],
  creator: 'Wall Street Silver',
  publisher: 'Wall Street Silver',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://developers.wallstreetsilver.com',
    siteName: 'Wall Street Silver',
    title: 'Wall Street Silver Developer Hub',
    description:
      'Open precious metals analytics and research platform. Developer documentation, APIs, and market research.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Wall Street Silver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wall Street Silver Developer Hub',
    description:
      'Open precious metals analytics and research platform. Developer documentation, APIs, and market research.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://developers.wallstreetsilver.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
