import { FC } from 'react';
import Project from './Project';

import styles from '@/styles/ProjectsContainer.module.css';

const projects = [
  {
    id: 1,
    title: 'Project Title',
    description:
      'Quis magna adipisicing occaecat minim eiusmod adipisicing sit nisi consectetur. Laborum sunt ad irure tempor ea irure in Lorem voluptate nulla non culpa cillum mollit. Commodo eiusmod laboris anim sint enim magna reprehenderit labore nostrud officia. ',
    techStack: 'React, Next.js, Redux, Node.js, MongoDB, AWS.',
    imgPath: ''
  },
  {
    id: 2,
    title: 'Project Title',
    description:
      'Quis magna adipisicing occaecat minim eiusmod adipisicing sit nisi consectetur. Laborum sunt ad irure tempor ea irure in Lorem voluptate nulla non culpa cillum mollit. Commodo eiusmod laboris anim sint enim magna reprehenderit labore nostrud officia. ',
    techStack: 'React, Next.js, Redux, Node.js, MongoDB, AWS.',
    imgPath: ''
  },
  {
    id: 3,
    title: 'Project Title',
    description:
      'Quis magna adipisicing occaecat minim eiusmod adipisicing sit nisi consectetur. Laborum sunt ad irure tempor ea irure in Lorem voluptate nulla non culpa cillum mollit. Commodo eiusmod laboris anim sint enim magna reprehenderit labore nostrud officia. ',
    techStack: 'React, Next.js, Redux, Node.js, MongoDB, AWS.',
    imgPath: ''
  }
];

const ProjectsContainer: FC = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map(project => (
        <Project key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsContainer;
