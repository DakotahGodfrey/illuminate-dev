import {
  EditorToolbar,
  EditorWindow,
  Sidebar,
  ProjectWindow,
} from 'components';
import { useState } from 'react';
import styled from 'styled-components';
const ProjectsWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: max-content 1fr;
  height: calc(100vh - 10rem);
  .monaco-editor {
    overflow-y: hidden;
  }
  .editor {
    grid-column: 3;
    grid-row: 2;
    background-color: #222;
    color: #fff;
    font-size: 2rem;
    z-index: 10;
  }
  .projects {
    grid-column: 1;
    grid-row: 1 / span 2;
    overflow-y: scroll;
    background-color: #636161;
    padding: 5rem 2rem 2rem;
    .project-card {
      max-width: 70rem;
      margin-inline: auto;
      p {
        font-size: 2.4rem;
        margin-bottom: 1.6rem;
        padding: 0 0 0 2.5rem;
        color: #fff;
      }
      h2 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
        padding: 0.25rem 2rem;
        background-color: #fff;
        border-radius: 30px;
      }
    }
  }
`;

const Projects = () => {
  const [language, setLanguage] = useState<'html' | 'css' | 'javascript'>(
    'html'
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const handleFormClick = () => {
    setShowForm(!showForm);
  };
  const handleLanguageClick = (lang: 'html' | 'css' | 'javascript') => {
    setLanguage(lang);
  };
  return (
    <ProjectsWrapper>
      <ProjectWindow
        projects={projects}
        handleFormClick={handleFormClick}
        showForm={showForm}
      />
      <Sidebar />
      <EditorToolbar
        language={language}
        langClickHandler={handleLanguageClick}
      />
      <EditorWindow language={language} />
    </ProjectsWrapper>
  );
};

export default Projects;
