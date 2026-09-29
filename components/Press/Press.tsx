import Image from 'next/image';
import styles from './Press.module.css';

const LOGOS = [
  { id: 1, src: '/images/press-eco-stylist.webp', alt: 'Eco-Stylist', width: 120, height: 20 },
  {
    id: 2,
    src: '/images/press-canadian-living.webp',
    alt: 'Canadian Living',
    width: 130,
    height: 30,
  },
  {
    id: 3,
    src: '/images/press-jillian-harris.webp',
    alt: 'Jillian Harris',
    width: 150,
    height: 24,
  },
  { id: 4, src: '/images/press-eco-hub.webp', alt: 'The Eco Hub', width: 140, height: 24 },
  { id: 5, src: '/images/press-trendhunter.webp', alt: 'Trendhunter', width: 140, height: 24 },
];

export default function Press() {
  return (
    <section className={styles.press}>
      <p className={styles.label}>as seen in</p>
      <ul className={styles.logos}>
        {LOGOS.map(({ id, src, alt, width, height }) => (
          <li key={id}>
            <Image src={src} alt={alt} width={width} height={height} />
          </li>
        ))}
      </ul>
    </section>
  );
}
