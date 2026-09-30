import Link from 'next/link';
import styles from './ComfortSection.module.css';

const STEPS = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-eco-store',
    title: 'You save.',
    text: 'Browse our comfort sets and save 15% when you bundle.',
  },
  {
    id: 2,
    icon: '/icons/sprite.svg#icon-truck',
    title: 'We ship.',
    text: 'We ship your items within 1–2 days of receiving your order.',
    tint: true,
  },
  {
    id: 3,
    icon: '/icons/sprite.svg#icon-sun-moon',
    title: 'You enjoy!',
    text: 'Wear hernest around the house, out on the town, or in bed.',
  },
];

export default function ComfortSection() {
  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>Comfort made easy</h2>

      <div className={styles.cards}>
        {STEPS.map(({ id, icon, title, text, tint }) => (
          <article key={id} className={`${styles.card} ${tint ? styles.cardTint : ''}`}>
            <svg className={styles.icon} aria-hidden="true">
              <use href={icon} />
            </svg>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <Link href="#customize" className={styles.cta}>
        Customize Your Outfit{' '}
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
