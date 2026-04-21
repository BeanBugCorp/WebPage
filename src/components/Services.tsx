import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import styles from './Services.module.css';

const serviceTags = [
  ['React', 'Next.js', 'TypeScript', 'Responsive'],
  ['React Native', 'iOS', 'Android', 'Cross-platform'],
  ['Node.js', 'Java', 'SQL', 'REST'],
];

export default function Services() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useReveal();
  const [gridRef, gridVisible] = useReveal();

  const items = t('services.items', { returnObjects: true }) as {
    id: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="services" className={styles.section}>
      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{t('services.label')}</span>
        <h2 className={styles.title}>{t('services.title')}</h2>
        <p className={styles.desc}>{t('services.description')}</p>
      </div>

      <div
        ref={gridRef}
        className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
      >
        {items.map((s, i) => (
          <div key={s.id} className={styles.card}>
            <div className={styles.icon}>{s.id}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className={styles.tags}>
              {serviceTags[i].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
