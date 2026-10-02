'use client';

import { useState, useEffect } from 'react';
import styles from './FansSection.module.css';

type Testimonial = {
  name: string;
  text: string;
};

const CARD_WIDTH = 338;
const GAP = 42;

export default function FansTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const reviewsPerPage = isMobile ? 1 : 3;
  const pageStep = reviewsPerPage * (CARD_WIDTH + GAP);
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

  const [prevReviewsPerPage, setPrevReviewsPerPage] = useState(reviewsPerPage);
  if (reviewsPerPage !== prevReviewsPerPage) {
    setPrevReviewsPerPage(reviewsPerPage);
    setCurrentPage(0);
  }

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const showPrevious = () => {
    if (!isFirstPage) setCurrentPage(currentPage - 1);
  };

  const showNext = () => {
    if (!isLastPage) setCurrentPage(currentPage + 1);
  };

  if (testimonials.length === 0) return null;

  return (
    <>
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
            style={{ transform: `translateX(-${currentPage * pageStep}px)` }}
          >
            {testimonials.map(({ name, text }, i) => (
              <blockquote key={i} className={styles.quote}>
                <div className={styles.quoteHeader}>
                  <div className={styles.avatar} aria-hidden="true" />

                  <div className={styles.avtor}>
                    <span className={styles.stars} role="img" aria-label="5 stars">
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

      <div className={styles.dots} role="tablist" aria-label="Review page">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === currentPage}
            aria-label={`Show reviews page ${i + 1}`}
            className={`${styles.dot} ${i === currentPage ? styles.dotActive : ''}`}
            onClick={() => setCurrentPage(i)}
          />
        ))}
      </div>
    </>
  );
}
