import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
import { Nunito } from '@next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

const Footer: FC = () => {
  const iconSize = 60;
  return (
    <footer className={styles.footer}>
      <div className={styles.contactLinksContainer}>
        <a href="mailto:iam@juannavas.dev">
          <Image
            src="/icons/email.svg"
            alt="Email icon"
            width={iconSize}
            height={iconSize}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/juannavasjn/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn icon"
            width={iconSize}
            height={iconSize}
          />
        </a>
        <a
          href="https://github.com/JuanNavasJN"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub icon"
            width={iconSize}
            height={iconSize}
          />
        </a>
      </div>
      <div>
        <p className={`${nunito.className}`}>
          Juan Navas © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
