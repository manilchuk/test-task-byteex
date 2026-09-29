'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

const FEATURES = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-ethically-sourced',
    title: 'Ethically sourced.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 2,
    icon: '/icons/sprite.svg#icon-responsibly-made',
    title: 'Responsibly made.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 3,
    icon: '/icons/sprite.svg#icon-made-for-living',
    title: 'Made for living in.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 4,
    icon: '/icons/sprite.svg#icon-comfortable',
    title: 'Unimaginably comfortable.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

const SLIDES = [
  { id: 1, src: '/images/feature-robe-1.webp', caption: 'White Robe' },
  { id: 2, src: '/images/feature-robe-2.webp', caption: 'White Robe' },
  { id: 3, src: '/images/feature-robe-3.webp', caption: 'White Robe' },
];

export default function Features() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section className={`container ${styles.features}`}>
      <div className={styles.list}>
        <h2>Loungewear you can be proud of.</h2>

        {FEATURES.map(({ id, icon, title, text }) => (
          <article key={id} className={styles.feature}>
            <svg className={styles.icon} aria-hidden="true">
              <use href={icon} />
            </svg>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.carousel}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous image"
          onClick={() => scrollByDir(-1)}
        >
          ‹
        </button>

        <div className={styles.track} ref={trackRef}>
          {SLIDES.map(({ id, src, caption }) => (
            <figure key={id} className={styles.slide}>
              <Image src={src} alt={caption} width={430} height={630} className={styles.photo} />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          className={styles.arrow}
          aria-label="Next image"
          onClick={() => scrollByDir(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}
