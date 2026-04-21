import { useTranslation } from 'react-i18next';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot} />
        {t('hero.badge')}
      </div>
      <h1 className={styles.title}>
        {t('hero.title_start')}<em>{t('hero.title_accent')}</em>{t('hero.title_end')}
      </h1>
      <p className={styles.sub}>{t('hero.subtitle')}</p>
      <div className={styles.actions}>
        <a href="#contact" className={styles.btnPrimary}>
          {t('hero.cta_primary')}
        </a>
        <a href="#services" className={styles.btnSecondary}>
          {t('hero.cta_secondary')}
        </a>
      </div>
      <div className={styles.scrollIndicator}>
        <span>{t('hero.scroll')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
