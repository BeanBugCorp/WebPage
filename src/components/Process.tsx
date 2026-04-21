import { useReveal } from '../hooks/useReveal';
import styles from './Process.module.css';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand your goals, users, and constraints. Define scope and success metrics.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes and prototypes. Iterate until the UX feels right before writing code.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Agile sprints with regular demos. Clean, tested, documented code throughout.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Launch, monitor, and support. We stick around to make sure everything runs smoothly.',
  },
];

export default function Process() {
  const header = useReveal();
  const content = useReveal();

  return (
    <section id="process" className={styles.section}>
      <div
        ref={header.ref}
        className={`${styles.header} ${header.visible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{'// How we work'}</span>
        <h2 className={styles.title}>Agile, transparent, and collaborative</h2>
        <p className={styles.desc}>
          We work in sprints so you see progress early and often. No black boxes.
        </p>
      </div>

      <div
        ref={content.ref}
        className={`${styles.steps} ${content.visible ? styles.visible : ''}`}
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
