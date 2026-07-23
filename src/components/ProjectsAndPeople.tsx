import { useTranslation } from "react-i18next";
import { useReveal } from '../hooks/useReveal';
import { BLOGS } from '../content-data';
import styles from '../CSS/ProjectsAndPeople.module.css';

type BlogMeta = { title: string; type: string };

export default function ProjectsAndPeople() {
    const { t } = useTranslation();
    const [headerRef, headerVisible] = useReveal();
    const [contentRef, contentVisible] = useReveal();

    const blogsMeta = t('ProjectsAndPeople.blogs', { returnObjects: true }) as Record<string, BlogMeta>;

    return (
        <section id = "projects_and_people" className={styles.section}>
            <div
                ref = {headerRef}
                className = {`${styles.header} ${headerVisible ? styles.visible: ''}`}
            >
                <span className = {styles.label}> {t('ProjectsAndPeople.label')} </span>
                <h2 className = {styles.title}> {t('ProjectsAndPeople.title')} </h2>
                <p className = {styles.desc}> {t('ProjectsAndPeople.description')} </p>
            </div>

            <div
                ref = {contentRef}
                className = {`${styles.cards} ${contentVisible ? styles.visible : ''}`}
            >
                {BLOGS.map((blog) => {
                    const meta = blogsMeta[blog.id];
                    return (
                        <a key={blog.id} href={blog.url} className={styles.card}>
                            <div className={styles.imageWrap}>
                                <img src={blog.thumbnail} alt={meta.title} className={styles.image} />
                            </div>
                            <div className={styles.textBlock}>
                                <h3 className={styles.cardTitle}>{meta.title}</h3>
                                <p className={styles.cardSubtitle}>{meta.type}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}