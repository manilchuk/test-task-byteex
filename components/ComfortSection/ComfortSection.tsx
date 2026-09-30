'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ComfortSection.module.css';

const STEPS = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-eco-store',
    title: 'You save.',
    text: 'Browse our comfort sets and save 15% when you bundle.',
  },
  {
    id: 2,
    icon: '/icons/sprite.svg#icon-truck',
    title: 'We ship.',
    text: 'We ship your items within 1–2 days of receiving your order.',
    tint: true,
  },
  {
    id: 3,
    icon: '/icons/sprite.svg#icon-sun-moon',
    title: 'You enjoy!',
    text: 'Wear hernest around the house, out on the town, or in bed.',
  },
];

export default function ComfortSection() {
  const [active, setActive] = useState(0);
  const last = STEPS.length - 1;

  const prev = () => setActive(i => (i === 0 ? last : i - 1));
  const next = () => setActive(i => (i === last ? 0 : i + 1));

  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>Comfort made easy</h2>

      <div className={styles.carousel}>
        <button type="button" className={styles.arrow} aria-label="Previous" onClick={prev}>
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-arrow-left" />
          </svg>
        </button>

        <div className={styles.cards}>
          {STEPS.map(({ id, icon, title, text, tint }, i) => (
            <article
              key={id}
              className={`${styles.card} ${tint ? styles.cardTint : ''} ${
                i === active ? styles.cardActive : ''
              }`}
            >
              <svg className={styles.icon} aria-hidden="true">
                <use href={icon} />
              </svg>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <button type="button" className={styles.arrow} aria-label="Next" onClick={next}>
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>

      <Link href="#customize" className={styles.cta}>
        Customize Your Outfit{' '}
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
