'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

type Slide = {
  imageUrl: string;
  caption: string;
};

export default function FeaturesGallery({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const last = slides.length - 1;

  const prev = () => setActive(i => (i === 0 ? last : i - 1));
  const next = () => setActive(i => (i === last ? 0 : i + 1));

  if (slides.length === 0) return null;

  return (
    <div className={styles.gallery}>
      <div className={styles.carousel}>
        <button type="button" className={styles.arrow} aria-label="Previous image" onClick={prev}>
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-arrow-left" />
          </svg>
        </button>

        <div className={styles.stage}>
          <Image
            src={slides[active].imageUrl}
            alt={slides[active].caption}
            width={433}
            height={648}
            className={styles.photo}
            priority
          />

          <ul className={styles.thumbs}>
            {slides.map((slide, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                >
                  <Image src={slide.imageUrl} alt="" width={48} height={64} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button type="button" className={styles.arrow} aria-label="Next image" onClick={next}>
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>

      <p className={styles.caption}>{slides[active].caption}</p>
    </div>
  );
}
