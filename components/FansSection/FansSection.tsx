import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { fansQuery } from '@/sanity/lib/queries';
import FansTestimonials from './FansTestimonials';
import styles from './FansSection.module.css';

type Testimonial = {
  name: string;
  text: string;
};

type FansData = {
  heading: string;
  subheading: string;
  testimonials: Testimonial[];
  ctaLabel: string;
};

const MOSAIC = Array.from({ length: 22 }, (_, index) => ({
  id: index + 1,
  src: `/images/FansSection/mosaic-${index + 1}.webp`,
}));

const FALLBACK: FansData = {
  heading: 'What are our fans saying?',
  subheading:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.',
  testimonials: [
    {
      name: 'Jane, S.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
    },
    {
      name: 'Jane, S.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
    },
    {
      name: 'Jane, S.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
    },
  ],
  ctaLabel: 'Customize Your Outfit',
};

export default async function FansSection() {
  const data = await client.fetch<FansData | null>(fansQuery);
  const fans = data && data.testimonials?.length ? data : FALLBACK;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.heading}`}>
        <h2>{fans.heading}</h2>
        <p>{fans.subheading}</p>
      </div>

      <ul className={styles.mosaic} aria-hidden="true">
        {MOSAIC.map(({ id, src }) => (
          <li key={id}>
            <Image src={src} alt="" width={120} height={120} />
          </li>
        ))}
      </ul>

      <FansTestimonials testimonials={fans.testimonials} />

      <Link href="#customize" className={styles.cta}>
        {fans.ctaLabel}
        <span aria-hidden="true">
          <svg>
            <use href="/icons/sprite.svg#icon-arrow" />
          </svg>
        </span>
      </Link>

      <p className={styles.proof}>
        <span className={styles.stars} role="img" aria-label="5 stars">
          <svg aria-hidden="true">
            <use href="/icons/sprite.svg#icon-stars" />
          </svg>
        </span>
        <span>Over 500+ 5 Star Reviews Online</span>
      </p>
    </section>
  );
}
