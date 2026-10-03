import type { Metadata, Viewport } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';

const poppins = Poppins({
  variable: '--font-sofia-pro',
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '400', '600'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-suisse-int',
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  display: 'swap',
});

const SITE_URL = 'https://byteex-rho.vercel.app';
export const revalidate = 60;
const SITE_NAME = 'Byteex';
const SITE_DESCRIPTION =
  'Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made, and unimaginably comfortable.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — Comfortable, ethically made loungewear`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['loungewear', 'comfortable clothing', 'ethical fashion', 'sustainable loungewear'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Comfortable, ethically made loungewear`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/Metadata.webp',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Comfortable, ethically made loungewear`,
    description: SITE_DESCRIPTION,
    images: ['/images/Metadata.webp'],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#01005b',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
