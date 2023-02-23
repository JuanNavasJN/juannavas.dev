import { FC } from 'react';
import React from 'react';
import { Nunito } from '@next/font/google';
import LinkButton from './LinkButton';

import styles from '@/styles/ProjectCard.module.css';

const nunito = Nunito({ subsets: ['latin'] });

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  imgPath: string;
  site?: string;
  code?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  description,
  imgPath,
  techStack,
  title,
  code,
  site
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
      <div>
        <h4 className={nunito.className}>{title}</h4>
        <p className={nunito.className}>{description}</p>
        <p className={nunito.className}>
          <b>Tech Stack:</b> {techStack}
        </p>
        <div className={styles.linksContainer}>
          {site && <LinkButton text="Site" href={site} />}
          {code && <LinkButton text="Code" href={code} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
