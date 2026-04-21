import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>&copy; {new Date().getFullYear()} BeanBugCorp. All rights reserved.</span>
      <div className={styles.links}>
        <a href="https://github.com/BeanBugCorp" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
