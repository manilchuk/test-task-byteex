'use client';

import { useState } from 'react';
import styles from './FaqSection.module.css';

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className={styles.faq}>
      {items.map(({ question, answer }, i) => (
        <li key={i}>
          <button
            type="button"
            className={styles.question}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {question}

            <svg className={styles.icon} aria-hidden="true">
              <use href={`/icons/sprite.svg#${open === i ? 'icon-minus' : 'icon-plus'}`} />
            </svg>
          </button>

          <div id={`faq-panel-${i}`} className={styles.answer} hidden={open !== i}>
            <p>{answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
