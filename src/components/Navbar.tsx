import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Bean Bug Corp<span className={styles.cursor}>_</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#services">{t('nav.services')}</a></li>
        <li><a href="#process">{t('nav.process')}</a></li>
        <li><a href="#tech">{t('nav.stack')}</a></li>
      </ul>
      <div className={styles.right}>
        <LanguageToggle />
        <a href="#contact" className={styles.cta}>{t('nav.cta')}</a>
      </div>
    </nav>
  );
}
