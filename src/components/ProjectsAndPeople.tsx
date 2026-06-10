import { useTranslation } from "react-i18next";
import { useReveal } from '../hooks/useReveal';
import styles from '../CSS/ProjectsAndPeople.module.css';

export default function ProjectsAndPeople() {
    const { t } = useTranslation();
    const [headerRef, headerVisible] = useReveal();
    const [contentRef, contentVisible] = useReveal();

    return (
        <section id = "projectsAndPeople" className={styles.section}>
            <div
                ref = {headerRef}
                className = {`${styles.header} ${headerVisible ? styles.visible: ''}`}
            >
                <span className = {styles.label}>hola</span>
                <h2 className = {styles.title}>Este es el título</h2>
                <p className = {styles.desc}>Aqui va todo el texto para describir la cosa</p>
            </div>
        </section>
    );
}