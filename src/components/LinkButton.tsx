import { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/LinkButton.module.css';

interface LinkButtonProps {
  text: string;
  href: string;
}

const LinkButton: FC<LinkButtonProps> = ({ text, href }) => {
  const iconSize = 20;

  return (
    <a
      className={`${styles.button}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <Image
        src="/icons/external-link.svg"
        alt="External link icon"
        width={iconSize}
        height={iconSize}
      />
    </a>
  );
};

export default LinkButton;
