import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import styles from './Process.module.css';

export default function Process() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  const steps = t('process.steps', { returnObjects: true }) as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <section id="process" className={styles.section}>
      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{t('process.label')}</span>
        <h2 className={styles.title}>{t('process.title')}</h2>
        <p className={styles.desc}>{t('process.description')}</p>
      </div>

      <div
        ref={contentRef}
        className={`${styles.steps} ${contentVisible ? styles.visible : ''}`}
      >
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.number}>{step.number}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
