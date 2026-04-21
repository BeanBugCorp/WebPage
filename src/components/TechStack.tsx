import { useReveal } from '../hooks/useReveal';
import styles from './TechStack.module.css';

const technologies = [
  'React',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'React Native',
  'Node.js',
  'Java',
  'SQL',
  'PostgreSQL',
  'Git',
  'REST APIs',
  'Tailwind CSS',
  'Figma',
  'Vercel',
];

export default function TechStack() {
  const header = useReveal();
  const pills = useReveal();

  return (
    <section id="tech" className={styles.section}>
      <div
        ref={header.ref}
        className={`${styles.header} ${header.visible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{'// Our stack'}</span>
        <h2 className={styles.title}>Tools we work with</h2>
        <p className={styles.desc}>
          We pick the right tool for the job — not the trendiest one.
        </p>
      </div>

      <div
        ref={pills.ref}
        className={`${styles.marquee} ${pills.visible ? styles.visible : ''}`}
      >
        {technologies.map((tech) => (
          <span key={tech} className={styles.pill}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
