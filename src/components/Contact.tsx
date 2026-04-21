import { useReveal } from '../hooks/useReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const content = useReveal();

  return (
    <section id="contact" className={styles.section}>
      <div
        ref={content.ref}
        className={`${styles.inner} ${content.visible ? styles.visible : ''}`}
      >
        <span className={styles.label}>{"// Let's talk"}</span>
        <h2 className={styles.title}>Have a project in mind?</h2>
        <p className={styles.desc}>
          Tell us what you're building. We'll figure out how to make it happen —
          together.
        </p>
        <a href="mailto:hello@beanbugcorp.com" className={styles.email}>
          hello@beanbugcorp.com
        </a>
      </div>
    </section>
  );
}
