import { ProjectCard } from 'components';
import React from 'react';

interface ProjectWindowProps {
  projects: {
    title: string;
    body: string;
  }[];
  handleFormClick: () => void;
  showForm: boolean;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({
  projects,
  handleFormClick,
  showForm,
}) => {
  return (
    <section className='projects'>
      <button onClick={handleFormClick}>New Project</button>
      {showForm && (
        <form>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' />
          <label htmlFor=''></label>
        </form>
      )}
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};

export default ProjectWindow;
