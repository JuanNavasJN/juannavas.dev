import { FC } from 'react';
import styles from '@/styles/Footer.module.css';
import { Nunito } from '@next/font/google';
import Email from '@/svg/Email';
import LinkedIn from '@/svg/LinkedIn';
import GitHub from '@/svg/GitHub';

const nunito = Nunito({ subsets: ['latin'] });

const Footer: FC = () => {
  const iconSize = 60;
  return (
    <footer className={styles.footer}>
      <div className={styles.contactLinksContainer}>
        <a href="mailto:iam@juannavas.dev">
          <Email width={iconSize} height={iconSize} className="svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/juannavasjn/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn width={iconSize} height={iconSize} className="svg" />
        </a>
        <a
          href="https://github.com/JuanNavasJN"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub width={iconSize} height={iconSize} className="svg" />
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
