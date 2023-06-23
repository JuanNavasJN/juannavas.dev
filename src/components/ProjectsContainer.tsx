import { FC } from 'react';
import ProjectCard from './ProjectCard';

import styles from '@/styles/ProjectsContainer.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  imgPath: string;
  show: boolean;
  code?: string;
  site?: string;
}

interface Props {
  projects: Project[];
}

const ProjectsContainer: FC<Props> = ({ projects = [] }) => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map(project =>
        project.show ? <ProjectCard key={project.id} {...project} /> : null
      )}
    </div>
  );
};

export default ProjectsContainer;
