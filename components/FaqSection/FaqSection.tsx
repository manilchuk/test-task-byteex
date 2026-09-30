'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './FaqSection.module.css';

const FAQ = [
  {
    id: 1,
    q: 'lorem ipsum dolor sit amet',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 2,
    q: 'lorem ipsum dolor sit amet',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 3,
    q: 'lorem ipsum dolor sit amet',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 4,
    q: 'lorem ipsum dolor sit amet',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 5,
    q: 'lorem ipsum dolor sit amet',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.list}>
        <h2>Frequently asked questions.</h2>

        <ul className={styles.faq}>
          {FAQ.map(({ id, q, a }, i) => (
            <li key={id}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${id}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {q}

                <svg className={styles.icon} aria-hidden="true">
                  <use href={`/icons/sprite.svg#${open === i ? 'icon-minus' : 'icon-plus'}`} />
                </svg>
              </button>

              <div id={`faq-panel-${id}`} className={styles.answer} hidden={open !== i}>
                <p>{a}</p>
              </div>
            </li>
          ))}
        </ul>
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
