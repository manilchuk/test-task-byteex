'use client';

import { useState } from 'react';
import styles from './StarRating.module.css';

type StarRatingProps = {
  value: number;
  onChange?: (value: number) => void;
  max?: number;
  name?: string;
  required?: boolean;
};

export default function StarRating({
  value,
  onChange,
  max = 5,
  name = 'rating',
  required = false,
}: StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const isInteractive = typeof onChange === 'function';
  const displayValue = isInteractive && hovered > 0 ? hovered : value;

  const stars = Array.from({ length: max }, (_, i) => i + 1);

  if (!isInteractive) {
    return (
      <div className={styles.stars} role="img" aria-label={`${value} out of ${max} stars`}>
        {stars.map(star => (
          <svg
            key={star}
            className={`${styles.star} ${star <= value ? '' : styles.starEmpty}`}
            aria-hidden="true"
          >
            <use href="/icons/sprite.svg#icon-star" />
          </svg>
        ))}
      </div>
    );
  }

  return (
    <div
      className={styles.starsInteractive}
      role="radiogroup"
      aria-label={`Rating, ${max} stars`}
      onMouseLeave={() => setHovered(0)}
    >
      {stars.map(star => (
        <label
          key={star}
          className={styles.starLabel}
          onMouseEnter={() => setHovered(star)}
          aria-label={`${star} ${star === 1 ? 'star' : 'stars'}`}
        >
          <input
            type="radio"
            name={name}
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
            required={required && star === 1}
            className={styles.radioInput}
          />
          <svg
            className={`${styles.star} ${star <= displayValue ? '' : styles.starEmpty}`}
            aria-hidden="true"
          >
            <use href="/icons/sprite.svg#icon-star" />
          </svg>
        </label>
      ))}
    </div>
  );
}
