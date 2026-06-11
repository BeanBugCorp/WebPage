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
                <span className = {styles.label}> {t('ProjectsAndPeople.label')} </span>
                <h2 className = {styles.title}> {t('ProjectsAndPeople.title')} </h2>
                <p className = {styles.desc}> {t('ProjectsAndPeople.description')} </p>
            </div>
        </section>
    );
}