import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { comfortQuery } from '@/sanity/lib/queries';
import ComfortSteps from './ComfortSteps';
import styles from './ComfortSection.module.css';

type Step = {
  icon: string;
  title: string;
  text: string;
  tint?: boolean;
};

type ComfortData = {
  sectionTitle: string;
  steps: Step[];
  ctaLabel: string;
};

const FALLBACK: ComfortData = {
  sectionTitle: 'Comfort made easy',
  steps: [
    {
      icon: 'icon-eco-store',
      title: 'You save.',
      text: 'Browse our comfort sets and save 15% when you bundle.',
    },
    {
      icon: 'icon-truck',
      title: 'We ship.',
      text: 'We ship your items within 1\u20132 days of receiving your order.',
      tint: true,
    },
    {
      icon: 'icon-sun-moon',
      title: 'You enjoy!',
      text: 'Wear hernest around the house, out on the town, or in bed.',
    },
  ],
  ctaLabel: 'Customize Your Outfit',
};

export default async function ComfortSection() {
  const data = await client.fetch<ComfortData | null>(comfortQuery);
  const comfort = data && data.steps?.length ? data : FALLBACK;

  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>{comfort.sectionTitle}</h2>

      <ComfortSteps steps={comfort.steps} />

      <Link href="#customize" className={styles.cta}>
        {comfort.ctaLabel}{' '}
        <span aria-hidden="true">
          <svg>
            <use href="/icons/sprite.svg#icon-arrow" />
          </svg>
        </span>
      </Link>

      <p className={styles.proof}>
        <span className={styles.stars} aria-label="5 stars">
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-stars" />
          </svg>
        </span>
        <span>Over 500+ 5 Star Reviews Online</span>
      </p>
    </section>
  );
}
