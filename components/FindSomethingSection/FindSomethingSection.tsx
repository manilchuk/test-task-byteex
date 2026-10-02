import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { findSomethingQuery } from '@/sanity/lib/queries';
import styles from './FindSomethingSection.module.css';

type Benefit = {
  icon: string;
  title: string;
  text: string;
};

type FindSomethingData = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  shippingText: string;
  benefits: Benefit[];
  photoLeftUrl: string | null;
  photoCenterUrl: string | null;
  photoRightUrl: string | null;
};

const FALLBACK: FindSomethingData = {
  title: 'Find something you love.',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  ctaLabel: 'Customize Your Outfit',
  shippingText: 'Ships in 1-2 Days',
  benefits: [
    { icon: 'icon-free-shipping', title: 'FREE Shipping on', text: 'Orders over $200' },
    { icon: 'icon-reviews', title: 'Over 500+ 5 Star', text: 'Reviews Online' },
    { icon: 'icon-made-ethically', title: 'Made ethically', text: 'and responsibly.' },
  ],
  photoLeftUrl: '/images/hero-5.webp',
  photoCenterUrl: '/images/hero-4.webp',
  photoRightUrl: '/images/hero-1.webp',
};

export default async function FindSomethingSection() {
  const data = await client.fetch<FindSomethingData | null>(findSomethingQuery);
  const content = data?.title ? data : FALLBACK;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.intro}>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        <div className={styles.gallery}>
          <div className={styles.galleryBackground} />

          {content.photoLeftUrl && (
            <Image
              src={content.photoLeftUrl}
              alt=""
              width={223}
              height={338}
              className={`${styles.photo} ${styles.photoLeft}`}
            />
          )}

          {content.photoCenterUrl && (
            <Image
              src={content.photoCenterUrl}
              alt=""
              width={263}
              height={399}
              className={`${styles.photo} ${styles.photoCenter}`}
            />
          )}

          {content.photoRightUrl && (
            <Image
              src={content.photoRightUrl}
              alt=""
              width={223}
              height={338}
              className={`${styles.photo} ${styles.photoRight}`}
            />
          )}
        </div>

        <Link href="#customize" className={styles.cta}>
          {content.ctaLabel}
          <span aria-hidden="true">
            <svg>
              <use href="/icons/sprite.svg#icon-arrow" />
            </svg>
          </span>
        </Link>

        <div className={styles.shipping}>
          <span className={styles.shippingText}>
            <svg className={styles.shippingIcon} aria-hidden="true">
              <use href="/icons/sprite.svg#icon-clock" />
            </svg>
            {content.shippingText}
          </span>
          <span className={styles.divider} aria-hidden="true" />
          <Image
            src="/images/cards.webp"
            alt=""
            width={243}
            height={22}
            className={styles.payments}
          />
        </div>

        <div className={styles.benefits}>
          {content.benefits.map(({ icon, title, text }, i) => (
            <div key={i} className={styles.benefit}>
              <div className={styles.benefitIcon}>
                <svg aria-hidden="true">
                  <use href={`/icons/sprite.svg#${icon}`} />
                </svg>
              </div>

              <p>
                {title}
                <br />
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
