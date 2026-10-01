import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { faqQuery } from '@/sanity/lib/queries';
import FaqAccordion from './FaqAccordion';
import styles from './FaqSection.module.css';

type FaqItem = {
  question: string;
  answer: string;
};

export default async function FaqSection() {
  const data = await client.fetch<{ items: FaqItem[] } | null>(faqQuery);
  const items = data?.items ?? [];

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.list}>
        <h2>Frequently asked questions.</h2>
        <FaqAccordion items={items} />
      </div>

      <div className={styles.gallery} aria-hidden="true">
        <Image
          src="/images/FaqSection/faq-1.webp"
          alt=""
          width={220}
          height={293}
          className={`${styles.photo} ${styles.photo1}`}
        />
        <Image
          src="/images/FaqSection/faq-2.webp"
          alt=""
          width={260}
          height={347}
          className={`${styles.photo} ${styles.photo2}`}
        />
        <Image
          src="/images/FaqSection/faq-3.webp"
          alt=""
          width={180}
          height={240}
          className={`${styles.photo} ${styles.photo3}`}
        />
        <div className={styles.shadow1} aria-hidden="true" />
        <div className={styles.shadow2} aria-hidden="true" />
      </div>
    </section>
  );
}
