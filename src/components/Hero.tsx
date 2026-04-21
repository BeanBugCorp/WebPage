import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.dot} />
        Now accepting new clients
      </div>
      <h1 className={styles.title}>
        We build the <em>software</em> your business needs
      </h1>
      <p className={styles.sub}>
        From responsive web experiences to full-scale mobile applications — we
        turn your vision into production-ready code.
      </p>
      <div className={styles.actions}>
        <a href="#contact" className={styles.btnPrimary}>
          Start a Project
        </a>
        <a href="#services" className={styles.btnSecondary}>
          See Our Work
        </a>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
