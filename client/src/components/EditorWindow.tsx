import { useRef } from 'react';
import Editor from '@monaco-editor/react';

interface EditorWindowProps {
  language: 'javascript' | 'css' | 'html';
}
const EditorWindow: React.FC<EditorWindowProps> = ({ language }) => {
  const editorRef = useRef(null);

  const handleEditorMount = async (monacoEditor: any) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      if (editorRef.current) {
        //@ts-ignore
        handleChange(editorRef.current.getValue(), test);
      }
    });
  };

  const handleShowValue = () => {
    //@ts-ignore
    console.log(language);
  };

  return (
    <div className='editor'>
      <button onClick={handleShowValue}>Show Value</button>
      <Editor
        height='calc(100vh - 10rem)'
        defaultLanguage='html'
        language={language}
        theme={'vs-dark'}
        onMount={handleEditorMount}
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export {};
export default EditorWindow;
