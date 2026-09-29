import Image from 'next/image';
import Link from 'next/link';
import styles from './BestSelfSection.module.css';

export default function BestSelfSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.gallery}>
          <Image
            src="/images/hero-1.webp"
            alt="Cropped Top & Shorts Set"
            width={165}
            height={175}
            className={styles.photoFirst}
          />

          <Image
            src="/images/hero-2.webp"
            alt="White Robe"
            width={382}
            height={570}
            className={styles.photoSecond}
          />

          <Image
            src="/images/bestSelfSection.webp"
            alt="A girl by the window"
            width={129}
            height={175}
            className={styles.photoLast}
          />
        </div>

        <div className={styles.list}>
          <h2 className={styles.title}>Be your best self.</h2>
          <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
            tincidunt pellentesque. In eget ipsum et felis finibus consequat.
          </p>
          <p>
            Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat
            ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu,
            pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.
          </p>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Sed eu nisl a metus ultrices sodales.
          </p>
          <p>
            Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget
            lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.
          </p>
          <p>
            Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut.
            Vivamus in felis eu lacus feugiat aliquam nec in sapien.
          </p>
          <p>Cras mattis varius mollis.</p>
          <Link href="#customize" className={styles.btn}>
            Customize Your Outfit
          </Link>
        </div>
      </div>
    </section>
  );
}
