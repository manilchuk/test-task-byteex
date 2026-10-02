import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'My website',
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
