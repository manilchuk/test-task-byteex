import { client } from '@/sanity/lib/client';
import { featuresQuery } from '@/sanity/lib/queries';
import FeaturesGallery from './FeaturesGallery';
import styles from './Features.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  text: string;
};

type GallerySlide = {
  imageUrl: string;
  caption: string;
};

type FeaturesData = {
  sectionTitle: string;
  items: FeatureItem[];
  gallery: GallerySlide[];
};

const FALLBACK: FeaturesData = {
  sectionTitle: 'Loungewear you can be proud of.',
  items: [
    {
      icon: 'icon-packaging',
      title: 'Ethically sourced.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      icon: 'icon-responsibly-made',
      title: 'Responsibly made.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      icon: 'icon-comfort',
      title: 'Made for living in.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
    {
      icon: 'icon-fabric',
      title: 'Unimaginably comfortable.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    },
  ],
  gallery: [
    { imageUrl: '/images/hero-1.webp', caption: 'Cropped Top & Shorts Set' },
    { imageUrl: '/images/hero-2.webp', caption: 'White Robe' },
    { imageUrl: '/images/hero-3.webp', caption: 'Comfortable Set' },
  ],
};

export default async function Features() {
  const data = await client.fetch<FeaturesData | null>(featuresQuery);
  const features = data && data.items?.length ? data : FALLBACK;

  return (
    <section className={`container ${styles.features}`}>
      <div className={styles.list}>
        <h2>{features.sectionTitle}</h2>

        {features.items.map(({ icon, title, text }, i) => (
          <article key={i} className={styles.feature}>
            <svg className={styles.icon} aria-hidden="true">
              <use href={`/icons/sprite.svg#${icon}`} />
            </svg>

            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <FeaturesGallery slides={features.gallery} />
    </section>
  );
}
