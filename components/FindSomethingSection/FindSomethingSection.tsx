import Image from 'next/image';
import styles from './FindSomethingSection.module.css';
import Link from 'next/link';

const BENEFITS = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-free-shipping',
    title: 'FREE Shipping on',
    text: 'Orders over $200',
  },
  {
    id: 2,
    icon: '/icons/sprite.svg#icon-reviews',
    title: 'Over 500+ 5 Star',
    text: 'Reviews Online',
  },
  {
    id: 3,
    icon: '/icons/sprite.svg#icon-made-ethically',
    title: 'Made ethically',
    text: 'and responsibly.',
  },
];

// const PAYMENT_METHODS = ['AMEX', 'Apple Pay', 'Diners', 'G Pay', 'Mastercard', 'Pay', 'VISA'];

export default function FindSomethingSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.intro}>
          <h2>Find something you love.</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
            tincidunt pellentesque. In eget ipsum et felis finibus consequat.
          </p>
        </div>

        <div className={styles.gallery}>
          <div className={styles.galleryBackground} />

          <Image
            src="/images/hero-5.webp"
            alt="Girl in Comfortable Movements"
            width={223}
            height={338}
            className={`${styles.photo} ${styles.photoLeft}`}
          />

          <Image
            src="/images/hero-4.webp"
            alt="Girl in Delicate Silk"
            width={263}
            height={399}
            className={`${styles.photo} ${styles.photoCenter}`}
          />

          <Image
            src="/images/hero-1.webp"
            alt="Girl in Cropped Top & Shorts Set"
            width={223}
            height={338}
            className={`${styles.photo} ${styles.photoRight}`}
          />
        </div>

        <Link href="#customize" className={styles.cta}>
          Customize Your Outfit
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
            Ships in 1-2 Days
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
          {BENEFITS.map(({ id, icon, title, text }) => (
            <div key={id} className={styles.benefit}>
              <div className={styles.benefitIcon}>
                <svg aria-hidden="true">
                  <use href={icon} />
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
