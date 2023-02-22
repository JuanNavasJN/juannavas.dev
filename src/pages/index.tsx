import Head from 'next/head';
import ProjectsContainer from '@/components/ProjectsContainer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Navas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <ProjectsContainer />
      </main>
      <Footer />
    </>
  );
}
