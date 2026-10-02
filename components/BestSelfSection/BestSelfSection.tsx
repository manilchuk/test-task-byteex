import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { bestSelfQuery } from '@/sanity/lib/queries';
import styles from './BestSelfSection.module.css';

type BestSelfData = {
  title: string;
  paragraphs: string[];
  ctaLabel: string;
  photoFirstUrl: string | null;
  photoSecondUrl: string | null;
  photoLastUrl: string | null;
};

const FALLBACK: BestSelfData = {
  title: 'Be your best self.',
  paragraphs: [
    'Hi! My name\u2019s [Insert Name], and I founded [Insert] in ____.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
    'Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.',
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.',
    'Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.',
    'Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.',
    'Cras mattis varius mollis.',
  ],
  ctaLabel: 'Customize Your Outfit',
  photoFirstUrl: '/images/hero-1.webp',
  photoSecondUrl: '/images/hero-2.webp',
  photoLastUrl: '/images/bestSelfSection.webp',
};

export default async function BestSelfSection() {
  const data = await client.fetch<BestSelfData | null>(bestSelfQuery);
  const content = data?.title ? data : FALLBACK;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.gallery}>
          {content.photoFirstUrl && (
            <Image
              src={content.photoFirstUrl}
              alt="Cropped Top & Shorts Set"
              width={165}
              height={175}
              className={styles.photoFirst}
            />
          )}

          {content.photoSecondUrl && (
            <Image
              src={content.photoSecondUrl}
              alt="White Robe"
              width={382}
              height={570}
              className={styles.photoSecond}
            />
          )}

          {content.photoLastUrl && (
            <Image
              src={content.photoLastUrl}
              alt="A girl by the window"
              width={129}
              height={175}
              className={styles.photoLast}
            />
          )}
        </div>

        <div className={styles.list}>
          <h2 className={styles.title}>{content.title}</h2>

          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <Link href="#customize" className={styles.btn}>
            {content.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
