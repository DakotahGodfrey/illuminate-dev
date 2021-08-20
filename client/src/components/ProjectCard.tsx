import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    body: string;
  };
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className='project-card'>
      <h2>{project.title}</h2>
      <p>{project.body}</p>
    </div>
  );
};

export default ProjectCard;
