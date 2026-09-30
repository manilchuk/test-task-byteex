import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const BULLETS = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-comfort',
    text: 'Beautiful, comfortable loungewear for day or night.',
  },
  {
    id: 2,
    icon: '/icons/sprite.svg#icon-packaging',
    text: 'No wasteful extras, like tags or plastic packaging.',
  },
  {
    id: 3,
    icon: '/icons/sprite.svg#icon-fabric',
    text: 'Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.',
  },
];

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <h1 className={styles.title}>Don&rsquo;t apologize for being comfortable.</h1>

      <div className={styles.collage} aria-hidden="true">
        <Image
          src="/images/hero-1.webp"
          alt=""
          width={209}
          height={316}
          className={`${styles.photo} ${styles.photo1}`}
        />
        <Image
          src="/images/hero-2.webp"
          alt=""
          width={260}
          height={422}
          className={`${styles.photo} ${styles.photo2}`}
        />
        <Image
          src="/images/hero-3.webp"
          alt=""
          width={209}
          height={316}
          className={`${styles.photo} ${styles.photo3}`}
        />
        <div className={styles.shadow1} aria-hidden="true" />
        <div className={styles.shadow2} aria-hidden="true" />
      </div>

      <ul className={styles.bullets}>
        {BULLETS.map(({ id, icon, text }) => (
          <li key={id} className={styles.bullet}>
            <svg className={styles.bulletIcon} aria-hidden="true" width={31} height={31}>
              <use href={icon} />
            </svg>

            <p className={styles.bulletText}>{text}</p>
          </li>
        ))}
      </ul>

      <Link href="#customize" className={styles.cta}>
        Customize Your Outfit{' '}
        <span className={styles.arrow} aria-hidden="true">
          <svg>
            <use href="/icons/sprite.svg#icon-arrow" />
          </svg>
        </span>
      </Link>

      <figure className={styles.review}>
        <Image
          src="/images/avatar-amy.webp"
          alt=""
          width={39}
          height={39}
          className={styles.avatar}
        />
        <figcaption className={styles.headerText}>
          <b>Amy P.</b>{' '}
          <span className={styles.stars} aria-label="5 stars">
            <svg className={styles.star} aria-hidden="true">
              <use href="/icons/sprite.svg#icon-stars" />
            </svg>
          </span>{' '}
          <span className={styles.reviewText}>One of 500+ 5 Star Reviews Online</span>
        </figcaption>
        <p className={styles.reviewTextDesktop}>
          Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on
          every level. From the compostable packaging, to the supplied washing bag, even the
          garments smells like fresh herbs when I first held them.
        </p>

        <p className={styles.reviewTextMobile}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin
          dolor, non sodales justo.
        </p>
      </figure>
    </section>
  );
}
