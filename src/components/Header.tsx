import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import DarkModeSwitch from './DarkModeSwitch';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/images/jn.png"
        alt="JN Logo"
        width={80}
        height={80}
        priority
        className={styles.logo}
      />
      <h1>Some Projects I&apos;ve worked on</h1>
      <DarkModeSwitch />
    </header>
  );
};

export default Header;
