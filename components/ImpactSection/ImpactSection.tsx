import styles from './ImpactSection.module.css';

const IMPACTS = [
  {
    id: 1,
    icon: '/icons/sprite.svg#icon-co2',
    value: '3,927 kg',
    description: 'of CO2 saved',
  },
  {
    id: 2,
    icon: '/icons/sprite.svg#icon-h2o',
    value: '2,546,167 days',
    description: 'of drinking water saved',
  },
  {
    id: 3,
    icon: '/icons/sprite.svg#icon-energy',
    value: '7,321 kWh',
    description: 'of energy saved',
  },
];

export default function ImpactSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Our total green impact</h2>

        <div className={styles.impactList}>
          {IMPACTS.map(({ id, icon, value, description }) => (
            <div key={id} className={styles.impact}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} aria-hidden="true">
                  <use href={icon} />
                </svg>
              </div>

              <p className={styles.value}>{value}</p>

              <p className={styles.description}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
