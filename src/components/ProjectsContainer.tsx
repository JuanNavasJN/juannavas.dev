import { FC } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsContainer.module.css';

const ProjectsContainer: FC = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map(project =>
        project.show ? <ProjectCard key={project.id} {...project} /> : null
      )}
    </div>
  );
};

export default ProjectsContainer;
