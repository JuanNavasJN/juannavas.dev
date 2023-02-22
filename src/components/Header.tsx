import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/images/jn.png"
        alt="JN Logo"
        width={80}
        height={80}
        priority
      />
      <h1 className={nunito.className}>Some Projects I&apos;ve worked on</h1>
    </header>
  );
};

export default Header;
