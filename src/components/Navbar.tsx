import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        BeanBugCorp<span className={styles.cursor}>_</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#services">Services</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#tech">Stack</a></li>
      </ul>
      <a href="#contact" className={styles.cta}>Get in Touch</a>
    </nav>
  );
}
