'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FansSection.module.css';

const MOSAIC = Array.from({ length: 22 }, (_, index) => ({
  id: index + 1,
  src: `/images/FansSection/mosaic-${index + 1}.webp`,
}));

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    id: 2,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    id: 4,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    id: 5,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet.',
  },
  {
    id: 6,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    id: 7,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
  {
    id: 8,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet.',
  },
  {
    id: 9,
    name: 'Jane, S.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
  },
];

const CARD_WIDTH = 338;
const GAP = 42;
const REVIEWS_PER_PAGE = 3;
const PAGE_STEP = REVIEWS_PER_PAGE * (CARD_WIDTH + GAP);

export default function FansSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(TESTIMONIALS.length / REVIEWS_PER_PAGE);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const showPrevious = () => {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const showNext = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.heading}`}>
        <h2>What are our fans saying?</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
          tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>

      <ul className={styles.mosaic} aria-hidden="true">
        {MOSAIC.map(({ id, src }) => (
          <li key={id}>
            <Image src={src} alt="" width={120} height={120} />
          </li>
        ))}
      </ul>

      <div className={`container ${styles.reviews}`}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous review"
          onClick={showPrevious}
          disabled={isFirstPage}
        >
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-arrow-left" />
          </svg>
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${currentPage * PAGE_STEP}px)`,
            }}
          >
            {TESTIMONIALS.map(({ id, name, text }) => (
              <blockquote key={id} className={styles.quote}>
                <div className={styles.quoteHeader}>
                  <div className={styles.avatar} aria-hidden="true" />

                  <div className={styles.avtor}>
                    <span className={styles.stars} aria-label="5 stars">
                      <svg aria-hidden="true">
                        <use href="/icons/sprite.svg#icon-stars" />
                      </svg>
                    </span>

                    <b>{name}</b>
                  </div>
                </div>

                <p>{text}</p>
              </blockquote>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={styles.arrow}
          aria-label="Next review"
          onClick={showNext}
          disabled={isLastPage}
        >
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-arrow-right" />
          </svg>
        </button>
      </div>

      <Link href="#customize" className={styles.cta}>
        Customize Your Outfit
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
