import {
  EditorToolbar,
  EditorWindow,
  PreviewToolbar,
  PreviewWindow,
  Sidebar,
} from 'components';
import { useState } from 'react';
import styled from 'styled-components';
const PlaygroundWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: max-content 1fr;
  /* height: calc(100vh - 10rem); */
  .monaco-editor {
    overflow-y: hidden;
  }
  .editor {
    grid-column: 1;
    grid-row: 2;
    background-color: #222;
    color: #fff;
    font-size: 2rem;
    z-index: 10;
  }
`;
const Playground = () => {
  const [language, setLanguage] = useState<'html' | 'css' | 'javascript'>(
    'html'
  );
  const handleLangClick = (option: 'html' | 'css' | 'javascript') => {
    setLanguage(option);
  };
  return (
    <PlaygroundWrapper>
      <EditorToolbar langClickHandler={handleLangClick} language={language} />
      <Sidebar />
      <EditorWindow language={language} />
      <PreviewToolbar />
      <PreviewWindow />
    </PlaygroundWrapper>
  );
};

export default Playground;
