import { useReveal } from '../hooks/useReveal';
import styles from './Services.module.css';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description:
      'Responsive, performant websites and web applications built with modern frameworks. From marketing sites to complex dashboards.',
    tags: ['React', 'Next.js', 'TypeScript', 'Responsive'],
  },
  {
    id: '02',
    title: 'Mobile Apps',
    description:
      'Native-quality mobile applications for iOS and Android. Cross-platform or native — whatever fits your users best.',
    tags: ['React Native', 'iOS', 'Android', 'Cross-platform'],
  },
  {
    id: '03',
    title: 'Backend & APIs',
    description:
      'Scalable server architecture and clean API design. Database modeling, authentication, integrations — the invisible engine.',
    tags: ['Node.js', 'Java', 'SQL', 'REST'],
  },
];

export default function Services() {
  const header = useReveal();
  const grid = useReveal();

  return (
    <section id="services" className={styles.section}>
      <div
        ref={header.ref}
        className={`${styles.header} ${header.visible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{'// What we do'}</span>
        <h2 className={styles.title}>End-to-end development, tailored to you</h2>
        <p className={styles.desc}>
          Every project is different. We adapt our approach to fit your business
          goals, timeline, and budget.
        </p>
      </div>

      <div
        ref={grid.ref}
        className={`${styles.grid} ${grid.visible ? styles.visible : ''}`}
      >
        {services.map((s) => (
          <div key={s.id} className={styles.card}>
            <div className={styles.icon}>{s.id}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <div className={styles.tags}>
              {s.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
