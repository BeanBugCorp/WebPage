import { useTranslation } from 'react-i18next';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const toggle = () => {
    i18n.changeLanguage(isSpanish ? 'en' : 'es');
  };

  return (
    <button className={styles.toggle} onClick={toggle} aria-label="Toggle language">
      <span className={isSpanish ? styles.inactive : styles.active}>EN</span>
      <span className={styles.divider}>/</span>
      <span className={isSpanish ? styles.active : styles.inactive}>ES</span>
    </button>
  );
}
