import { FC } from 'react';
import React from 'react';
import { Nunito } from '@next/font/google';

import styles from '@/styles/Project.module.css';

const nunito = Nunito({ subsets: ['latin'] });

interface ProjectProps {
  title: string;
  description: string;
  techStack: string;
  imgPath: string;
}

const Project: FC<ProjectProps> = ({
  description,
  imgPath,
  techStack,
  title
}) => {
  return (
    <div className={styles.project}>
      <div></div>
      <div>
        <h4 className={nunito.className}>{title}</h4>
        <p className={nunito.className}>{description}</p>
        <p className={nunito.className}>
          <b>Tech Stack:</b> {techStack}
        </p>
      </div>
    </div>
  );
};

export default Project;
