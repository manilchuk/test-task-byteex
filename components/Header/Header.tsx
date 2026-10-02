import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { headerQuery } from '@/sanity/lib/queries';
import styles from './Header.module.css';

type HeaderData = {
  announcements: string[];
  logoUrl: string | null;
};

const FALLBACK: HeaderData = {
  announcements: [
    'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)',
    'FREE SHIPPING on orders > $200',
    'easy 45 day return window.',
  ],
  logoUrl: '/images/logo.webp',
};

export default async function Header() {
  const data = await client.fetch<HeaderData | null>(headerQuery);
  const header = data && data.announcements?.length ? data : FALLBACK;

  return (
    <header>
      <div className={styles.topbar}>
        {header.announcements.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>

      <div className={`container ${styles.logoRow}`}>
        <Link href="/" className={styles.logo} aria-label="Byteex — home">
          {header.logoUrl && (
            <Image src={header.logoUrl} alt="Byteex" width={200} height={36} priority />
          )}
        </Link>
      </div>
    </header>
  );
}
