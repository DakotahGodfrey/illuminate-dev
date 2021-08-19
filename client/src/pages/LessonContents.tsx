import {
  EditorToolbar,
  EditorWindow,
  ContentWindow,
  Sidebar,
} from 'components';
import { useState } from 'react';
import styled from 'styled-components';

const LessonContentWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: max-content 1fr;
  color: #fff;
  background-color: #636161;
  height: calc(100vh - 10rem);
  nav {
    grid-column: 3;
    grid-row: 1;
  }
  .monaco-editor {
    overflow-y: hidden;
  }
  .editor {
    grid-column: 3;
    grid-row: 2;
    background-color: #333;
  }
  .content-wrapper {
    grid-row: 1 / span 2;
    overflow-y: scroll;
    background-color: #636161;
    padding: 2rem;
  }
  .content {
    max-width: 98%;
    margin-inline: auto;
    p {
      font-size: 2.4rem;
      margin-bottom: 1.6rem;
    }
    h1 {
      font-size: 3.6rem;
      margin-bottom: 2.4rem;
    }
  }
`;

const lesson = {
  title: 'A Witty Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolores delectus labore sed temporibus doloribus deleniti repellendus dolor ratione. Adipisci harum eligendi dolor atque.\nUt quod atque libero corrupti eveniet voluptas nostrum error esse. Placeat ipsam dolore magni doloremque dolorem at. Odio distinctio reiciendis soluta exercitationem sapiente? Ratione consectetur repellat soluta nobis molestias iure.\nDolore ullam enim, repellendus laudantium quisquam fugiat ipsa modi est vel perspiciatis quis libero corporis, repellat dolorum nulla mollitia quos sit debitis? Perferendis beatae dolore doloribus iure ipsa quis deserunt eligendi, molestias perspiciatis neque, nulla laboriosam placeat aliquid inventore veniam error nesciunt. Ipsum tempora vero consectetur.\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Error dolores delectus labore sed temporibus doloribus deleniti repellendus dolor ratione. Adipisci harum eligendi dolor atque.\nUt quod atque libero corrupti eveniet voluptas nostrum error esse. Placeat ipsam dolore magni doloremque dolorem at. Odio distinctio reiciendis soluta exercitationem sapiente? Ratione consectetur repellat soluta nobis molestias iure.\nDolore ullam enim, repellendus laudantium quisquam fugiat ipsa modi est vel perspiciatis quis libero corporis, repellat dolorum nulla mollitia quos sit debitis? Perferendis beatae dolore doloribus iure ipsa quis deserunt eligendi, molestias perspiciatis neque, nulla laboriosam placeat aliquid inventore veniam error nesciunt. Ipsum tempora vero consectetur.',
};
// interface LessonContentProps {
//   lesson: {
//     title: string;
//     body: string;
//     language: 'html' | 'css' | 'javascript';
//   };
// }
const LessonContent = () => {
  const [language, setLanguage] = useState<'html' | 'css' | 'javascript'>(
    'html'
  );

  const handleLanguageClick = (lang: 'html' | 'css' | 'javascript') => {
    setLanguage(lang);
  };
  return (
    <LessonContentWrapper>
      <ContentWindow content={lesson} />
      <Sidebar />
      <EditorToolbar
        language={language}
        langClickHandler={handleLanguageClick}
      />
      <EditorWindow language={language} />
    </LessonContentWrapper>
  );
};

export default LessonContent;
