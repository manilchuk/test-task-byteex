'use client';

import { useState } from 'react';
import styles from './ComfortSection.module.css';

type Step = {
  icon: string;
  title: string;
  text: string;
  tint?: boolean;
};

export default function ComfortSteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const last = steps.length - 1;

  const prev = () => setActive(i => (i === 0 ? last : i - 1));
  const next = () => setActive(i => (i === last ? 0 : i + 1));

  return (
    <div className={styles.carousel}>
      <button type="button" className={styles.arrow} aria-label="Previous" onClick={prev}>
        <svg aria-hidden="true">
          <use href="/icons/sprite.svg#icon-arrow-left" />
        </svg>
      </button>

      <div className={styles.cards}>
        {steps.map(({ icon, title, text, tint }, i) => (
          <article
            key={i}
            className={`${styles.card} ${tint ? styles.cardTint : ''} ${
              i === active ? styles.cardActive : ''
            }`}
          >
            <svg className={styles.icon} aria-hidden="true">
              <use href={`/icons/sprite.svg#${icon}`} />
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
  );
}
