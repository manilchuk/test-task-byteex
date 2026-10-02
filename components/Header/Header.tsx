import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const ANNOUNCEMENTS = [
  'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)',
  'FREE SHIPPING on orders > $200',
  'easy 45 day return window.',
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        {ANNOUNCEMENTS.map(text => (
          <span key={text}>{text}</span>
        ))}
      </div>

      <div className={`container ${styles.logoRow}`}>
        <Link href="/" className={styles.logo} aria-label="Byteex — home">
          <Image src="/images/logo.webp" alt="Byteex" width={200} height={36} priority />
        </Link>
      </div>
    </header>
  );
}
