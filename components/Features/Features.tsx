'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Features.module.css';

const FEATURES = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-packaging',
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
    icon: '/icons/sprite.svg#icon-comfort',
    title: 'Made for living in.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 4,
    icon: '/icons/sprite.svg#icon-fabric',
    title: 'Unimaginably comfortable.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

const SLIDES = [
  { id: 1, src: '/images/hero-1.webp', caption: 'Cropped Top & Shorts Set' },
  { id: 2, src: '/images/hero-2.webp', caption: 'White Robe' },
  { id: 3, src: '/images/hero-3.webp', caption: 'Comfortable Set' },
  { id: 4, src: '/images/hero-4.webp', caption: 'Delicate Silk' },
  { id: 5, src: '/images/hero-5.webp', caption: 'Comfortable Movements' },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const last = SLIDES.length - 1;

  const prev = () => setActive(i => (i === 0 ? last : i - 1));
  const next = () => setActive(i => (i === last ? 0 : i + 1));

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

      <div className={styles.gallery}>
        <div className={styles.carousel}>
          <button type="button" className={styles.arrow} aria-label="Previous image" onClick={prev}>
            <svg aria-hidden="true">
              <use href="/icons/sprite.svg#icon-arrow-left" />
            </svg>
          </button>

          <div className={styles.stage}>
            <Image
              src={SLIDES[active].src}
              alt={SLIDES[active].caption}
              width={433}
              height={648}
              className={styles.photo}
              priority
            />

            <ul className={styles.thumbs}>
              {SLIDES.map((slide, i) => (
                <li key={slide.id}>
                  <button
                    type="button"
                    className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                    aria-label={`Show image ${i + 1}`}
                    aria-current={i === active}
                    onClick={() => setActive(i)}
                  >
                    <Image src={slide.src} alt="" width={48} height={64} />
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

        <p className={styles.caption}>{SLIDES[active].caption}</p>
      </div>
    </section>
  );
}
