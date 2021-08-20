import { CreateRepoModal, ProjectCard } from 'components';
import { useState } from 'react';
import React from 'react';

interface ProjectWindowProps {
  projects: {
    title: string;
    body: string;
  }[];
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ projects }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <section className='projects'>
      <button onClick={() => setShowModal(true)}>Create Project</button>
      {showModal && <CreateRepoModal setShowForm={setShowModal} />}
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};

export default ProjectWindow;
