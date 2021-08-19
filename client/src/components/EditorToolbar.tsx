import React from 'react';
import styled from 'styled-components';
import { FaCog, FaPaintRoller } from 'react-icons/fa';
const ToolbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #444;
  ul {
    padding: 1rem 2rem;
    display: flex;
  }
  button {
    border-radius: 5rem;
    margin-inline: 1rem;
    font-size: 1.6rem;
    border: none;
  }
  .language-menu {
    button {
      padding: 0.5rem 1.5rem;
      font-weight: 900;
    }
    .active {
      background-color: #333;
      color: #fff;
    }
  }
  .settings-menu {
    button {
      min-width: 4.4rem;
      min-height: 4.4rem;
      background-color: hsl(0, 0%, 100%, 20%);
      border: 2px solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: #fff;
        width: 3rem;
        height: 3rem;
        margin: 1rem;
      }
    }
  }
`;
interface EditorToolbarProps {
  langClickHandler: (language: 'html' | 'css' | 'javascript') => void;
  language: 'html' | 'css' | 'javascript';
}
const EditorToolbar: React.FC<EditorToolbarProps> = ({
  langClickHandler,
  language,
}) => {
  return (
    <ToolbarWrapper>
      <ul className='language-menu'>
        <li>
          <button
            onClick={() => langClickHandler('html')}
            className={`${language === 'html' && 'active'}`}
          >
            HTML
          </button>
        </li>
        <li>
          <button
            onClick={() => langClickHandler('css')}
            className={`${language === 'css' && 'active'}`}
          >
            CSS
          </button>
        </li>
        <li>
          <button
            onClick={() => langClickHandler('javascript')}
            className={`${language === 'javascript' && 'active'}`}
          >
            JavaScript
          </button>
        </li>
      </ul>
      <ul className='settings-menu'>
        <li>
          <button>
            <FaCog />
          </button>
        </li>
        <li>
          <button>
            <FaPaintRoller />
          </button>
        </li>
      </ul>
    </ToolbarWrapper>
  );
};
export default EditorToolbar;
