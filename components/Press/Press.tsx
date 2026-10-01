import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { pressQuery } from '@/sanity/lib/queries';
import styles from './Press.module.css';

type PressLogo = {
  name: string;
  imageUrl: string | null;
};

type PressData = {
  label: string;
  logos: PressLogo[];
};

const FALLBACK: PressData = {
  label: 'as seen in',
  logos: [
    { name: 'Eco-Stylist', imageUrl: '/images/press-eco-stylist.webp' },
    { name: 'Canadian Living', imageUrl: '/images/press-canadian-living.webp' },
    { name: 'Jillian Harris', imageUrl: '/images/press-jillian-harris.webp' },
    { name: 'The Eco Hub', imageUrl: '/images/press-eco-hub.webp' },
    { name: 'Trendhunter', imageUrl: '/images/press-trendhunter.webp' },
  ],
};

export default async function Press() {
  const data = await client.fetch<PressData | null>(pressQuery);
  const press = data && data.logos?.length ? data : FALLBACK;

  return (
    <section className={styles.press}>
      <p className={styles.label}>{press.label}</p>
      <ul className={styles.logos}>
        {press.logos.map(({ name, imageUrl }) =>
          imageUrl ? (
            <li key={name}>
              <Image src={imageUrl} alt={name} width={140} height={24} />
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
}
