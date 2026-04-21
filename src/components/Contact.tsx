import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useTranslation();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section id="contact" className={styles.section}>
      <div
        ref={contentRef}
        className={`${styles.inner} ${contentVisible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{t('contact.label')}</span>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        <p className={styles.desc}>{t('contact.description')}</p>
        <a href="mailto:hello@beanbugcorp.com" className={styles.email}>
          team@beanbugcorp.com
        </a>
      </div>
    </section>
  );
}
