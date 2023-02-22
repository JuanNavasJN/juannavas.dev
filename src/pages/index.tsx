import Head from 'next/head';
import ProjectsContainer from '@/components/ProjectsContainer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Navas</title>
      </Head>

      <Header />
      <main>
        <ProjectsContainer />
      </main>
      <Footer />
    </>
  );
}
