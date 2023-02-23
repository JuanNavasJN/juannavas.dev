import { FC } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsContainer.module.css';

const ProjectsContainer: FC = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
