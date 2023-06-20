import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/DarkModeSwitch.module.css';

const DarkModeSwitch: FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if ((!theme && prefersDarkScheme.matches) || (theme && theme === 'dark')) {
      setIsDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    } else {
      setIsDark(true);
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    }
  };

  return (
    <div
      className={`${styles.darkModeSwitchContainer} ${
        isDark ? styles.dark : ''
      }`}
    >
      <button className={styles.button} onClick={toggleTheme}>
        <Image src="/icons/sun.svg" height={24} width={24} alt="sun" />
        <Image src="/icons/moon.svg" height={24} width={24} alt="moon" />
        <div className={styles.switch}></div>
      </button>
    </div>
  );
};

export default DarkModeSwitch;
