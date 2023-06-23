import Head from 'next/head';
import ProjectsContainer from '@/components/ProjectsContainer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/styles/Home.module.css';
import { useTranslation } from 'react-i18next';
import { personalProjects, projects } from '@/data';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Juan Navas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h2>{t('my-projects')}</h2>
        <ProjectsContainer projects={personalProjects} />
        <h2>{t('title')}</h2>
        <ProjectsContainer projects={projects} />
      </main>
      <Footer />
    </>
  );
}
