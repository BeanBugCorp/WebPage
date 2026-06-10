import { useTranslation } from "react-i18next";
import { useReveal } from '../hooks/useReveal';
import styles from '../CSS/ProjectsAndPeople.module.css';

export default function ProjectsAndPeople() {
    const { t } = useTranslation();
    const [contentRef, contentVisbiel] = useReveal();

    return (
        <section id = "projectsAndPeople" className={styles.section}>

        </section>
    );
}