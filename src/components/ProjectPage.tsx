import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useReveal } from '../hooks/useReveal';
import { BLOGS } from '../content-data';
import styles from '../CSS/ProjectPage.module.css';

const markdownFiles = import.meta.glob('/src/md/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

type BlogMeta = { title: string; type: string };

export default function ProjectPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [contentRef, contentVisible] = useReveal();

  const blog = BLOGS.find((b) => b.id === slug);

  if (!blog) {
    return (
      <section className={styles.section}>
        <div className={styles.notFound}>
          <h1 className={styles.title}>{t('ProjectsAndPeople.notFound.title')}</h1>
          <p className={styles.desc}>{t('ProjectsAndPeople.notFound.description')}</p>
          <Link to="/#projects_and_people" className={styles.back}>{t('ProjectsAndPeople.back')}</Link>
        </div>
      </section>
    );
  }

  const blogsMeta = t('ProjectsAndPeople.blogs', { returnObjects: true }) as Record<string, BlogMeta>;
  const meta = blogsMeta[blog.id];
  const mdPath = i18n.language === 'es' ? blog.mdES : blog.mdEN;
  const content = markdownFiles[mdPath] ?? markdownFiles[blog.mdEN];

  return (
    <section className={styles.section}>
      <Link to="/#projects_and_people" className={styles.back}>{t('ProjectsAndPeople.back')}</Link>

      <div
        ref={contentRef}
        className={`${styles.article} ${contentVisible ? styles.visible : ''}`}
      >
        <span className={styles.type}>{meta.type}</span>
        <h1 className={styles.title}>{meta.title}</h1>
        <img src={blog.thumbnail} alt={meta.title} className={styles.hero} />
        <div className={styles.body}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
