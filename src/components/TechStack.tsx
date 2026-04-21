import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';
import styles from './TechStack.module.css';

const technologies = [
  'React', 'TypeScript', 'JavaScript', 'Next.js', 'React Native',
  'Node.js', 'Java', 'SQL', 'PostgreSQL', 'Git', 'REST APIs',
  'Tailwind CSS', 'Figma', 'Vercel',
];

export default function TechStack() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useReveal();
  const [pillsRef, pillsVisible] = useReveal();

  return (
    <section id="tech" className={styles.section}>
      <div
        ref={headerRef}
        className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{t('tech.label')}</span>
        <h2 className={styles.title}>{t('tech.title')}</h2>
        <p className={styles.desc}>{t('tech.description')}</p>
      </div>

      <div
        ref={pillsRef}
        className={`${styles.marquee} ${pillsVisible ? styles.visible : ''}`}
      >
        {technologies.map((tech) => (
          <span key={tech} className={styles.pill}>{tech}</span>
        ))}
      </div>
    </section>
  );
}
