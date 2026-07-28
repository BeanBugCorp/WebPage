import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import styles from '../CSS/Navbar.module.css';

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();

  const handleLogoClick = () => {
    if (pathname === '/' && !hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo} onClick={handleLogoClick}>
        Bean Bug Corp<span className={styles.cursor}>_</span>
      </Link>
      <ul className={styles.links}>
        <li><a href="/#services">{t('nav.services')}</a></li>
        <li><a href="/#process">{t('nav.process')}</a></li>
        <li><a href="/#tech">{t('nav.stack')}</a></li>
        <li><a href="/#projects_and_people">{t('nav.projects_and_people')}</a></li>
      </ul>
      <div className={styles.right}>
        <LanguageToggle />
        <a href="/#contact" className={styles.cta}>{t('nav.cta')}</a>
      </div>
    </nav>
  );
}
