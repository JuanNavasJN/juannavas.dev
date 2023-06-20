import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import DarkModeSwitch from './DarkModeSwitch';
import LangButton from './LangButton';
import { useTranslation } from 'react-i18next';

const Header: FC = () => {
  const { t } = useTranslation();
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
      <h1>{t('title')}</h1>
      <div className={styles.settings}>
        <LangButton />
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
