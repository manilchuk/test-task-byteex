import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { heroQuery } from '@/sanity/lib/queries';
import styles from './Hero.module.css';

type HeroBullet = {
  icon: string;
  text: string;
};

type HeroData = {
  title: string;
  bullets: HeroBullet[];
  ctaLabel: string;
  reviewAuthor: string;
  reviewBadge: string;
  reviewText: string;
};

const FALLBACK: HeroData = {
  title: 'Don\u2019t apologize for being comfortable.',
  bullets: [
    { icon: 'icon-comfort', text: 'Beautiful, comfortable loungewear for day or night.' },
    { icon: 'icon-packaging', text: 'No wasteful extras, like tags or plastic packaging.' },
    {
      icon: 'icon-fabric',
      text: 'Our signature fabric is incredibly comfortable \u2014 unlike anything you\u2019ve ever felt.',
    },
  ],
  ctaLabel: 'Customize Your Outfit',
  reviewAuthor: 'Amy P.',
  reviewBadge: 'One of 500+ 5 Star Reviews Online',
  reviewText:
    'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.',
};

export default async function Hero() {
  const data = await client.fetch<HeroData | null>(heroQuery);
  const hero = data ?? FALLBACK;

  return (
    <section className={`container ${styles.hero}`}>
      <h1 className={styles.title}>{hero.title}</h1>

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
        {hero.bullets.map(({ icon, text }, i) => (
          <li key={i} className={styles.bullet}>
            <svg className={styles.bulletIcon} aria-hidden="true" width={31} height={31}>
              <use href={`/icons/sprite.svg#${icon}`} />
            </svg>

            <p className={styles.bulletText}>{text}</p>
          </li>
        ))}
      </ul>

      <Link href="#customize" className={styles.cta}>
        {hero.ctaLabel}{' '}
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
          <b>{hero.reviewAuthor}</b>{' '}
          <span className={styles.stars} aria-label="5 stars">
            <svg className={styles.star} aria-hidden="true">
              <use href="/icons/sprite.svg#icon-stars" />
            </svg>
          </span>{' '}
          <span className={styles.reviewText}>{hero.reviewBadge}</span>
        </figcaption>
        <p className={styles.reviewTextDesktop}>{hero.reviewText}</p>
        <p className={styles.reviewTextMobile}>{hero.reviewText}</p>
      </figure>
    </section>
  );
}
