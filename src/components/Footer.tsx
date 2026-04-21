import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <span>&copy; {new Date().getFullYear()} BeanBugCorp. {t('footer.rights')}</span>
      <div className={styles.links}>
        <a href="#contact">{t('nav.cta')}</a>
      </div>
    </footer>
  );
}
