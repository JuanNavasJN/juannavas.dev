import Head from 'next/head';
import Image from 'next/image';
import { Nunito } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Navas</title>
      </Head>
      <main className={styles.main}>
        <Image src="/jn.png" alt="JN Logo" width={100} height={100} priority />
        <h1 className={nunito.className}>Some Projects I&apos;ve worked on</h1>
      </main>
    </>
  );
}
