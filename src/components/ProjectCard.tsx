import { FC, useEffect, useState } from 'react';
import React from 'react';
import LinkButton from './LinkButton';
import Image from 'next/image';

import styles from '@/styles/ProjectCard.module.css';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  id: number;
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
  site,
  id
}) => {
  const { t } = useTranslation();
  const [desc, setDesc] = useState(description);

  useEffect(() => {
    const key = `proj-desc-${id}`;
    if (t(key) !== key) {
      // then the translation is available
      setDesc(t(key));
    } else {
      setDesc(description);
    }
  }, [t, id, description]);

  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        {imgPath ? (
          <Image
            className={styles.image}
            src={imgPath}
            alt={title}
            width={300}
            height={200}
          />
        ) : (
          <div className={styles.image}></div>
        )}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
        <p className={`${styles.techStack}`}>
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
