'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Press.module.css';

type Logo = {
  name: string;
  imageUrl: string | null;
};

const VISIBLE_PER_VIEW = 3;

export default function PressLogos({ logos }: { logos: Logo[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const totalPositions = Math.max(1, logos.length - VISIBLE_PER_VIEW + 1);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const itemWidth = el.clientWidth / VISIBLE_PER_VIEW;
    const position = Math.round(el.scrollLeft / itemWidth);
    setActive(Math.min(Math.max(position, 0), totalPositions - 1));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const itemWidth = el.clientWidth / VISIBLE_PER_VIEW;
    el.scrollTo({ left: i * itemWidth, behavior: 'smooth' });
  };

  return (
    <>
      <ul className={styles.logos} ref={trackRef} onScroll={handleScroll}>
        {logos.map(({ name, imageUrl }) =>
          imageUrl ? (
            <li key={name} className={styles.logoItem} data-logo={name}>
              <Image src={imageUrl} alt={name} width={140} height={24} />
            </li>
          ) : null
        )}
      </ul>

      {logos.length > VISIBLE_PER_VIEW && (
        <div className={styles.dots} role="tablist" aria-label="Press logos position">
          {Array.from({ length: totalPositions }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show logo position ${i + 1}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </>
  );
}
