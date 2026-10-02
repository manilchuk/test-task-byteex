import { client } from '@/sanity/lib/client';
import { impactQuery } from '@/sanity/lib/queries';
import styles from './ImpactSection.module.css';

type Stat = {
  icon: string;
  value: string;
  label: string;
};

type ImpactData = {
  sectionTitle: string;
  stats: Stat[];
};

const FALLBACK: ImpactData = {
  sectionTitle: 'Our total green impact',
  stats: [
    { icon: 'icon-co2', value: '3,927 kg', label: 'of CO2 saved' },
    { icon: 'icon-h2o', value: '2,546,167 days', label: 'of drinking water saved' },
    { icon: 'icon-energy', value: '7,321 kWh', label: 'of energy saved' },
  ],
};

export default async function ImpactSection() {
  const data = await client.fetch<ImpactData | null>(impactQuery);
  const impact = data && data.stats?.length ? data : FALLBACK;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{impact.sectionTitle}</h2>

        <div className={styles.impactList}>
          {impact.stats.map(({ icon, value, label }, i) => (
            <div key={i} className={styles.impact}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} aria-hidden="true">
                  <use href={`/icons/sprite.svg#${icon}`} />
                </svg>
              </div>

              <p className={styles.value}>{value}</p>
              <p className={styles.description}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
