import styled from 'styled-components';
import { FaSave } from 'react-icons/fa';
import { IoIosArrowBack, IoIosRefresh } from 'react-icons/io';
import { FiGithub } from 'react-icons/fi';
const ToolbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d3d3d3;
  padding: 1rem 2rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    border-radius: 5rem;
    margin-inline: 1rem;
    font-size: 1.6rem;
    border: none;
    background-color: transparent;
  }
  input {
    background-color: #d3d3d3;
    color: #444;
    font-size: 2.4rem;
    text-align: center;
    padding: 0.5rem 2rem;
    border-radius: 50px;
    border: none;
    width: 33%;
    transition: all 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:active,
    &:focus {
      background-color: #444;
      color: #fff;
      outline: 0;
    }
  }
  .options-menu,
  .actions-menu {
    button {
      min-width: 4.4rem;
      min-height: 4.4rem;
      svg {
        width: 3rem;
        height: 3rem;
        margin: 1rem;
      }
    }
  }
`;
const PreviewToolbar = () => {
  return (
    <ToolbarWrapper>
      <ul className='actions-menu'>
        <li>
          <button>
            <IoIosArrowBack />
          </button>
        </li>
        <li>
          <button>
            <IoIosRefresh />
          </button>
        </li>
        <li>
          <button>
            <FiGithub />
          </button>
        </li>
      </ul>
      <input type='text' value='portfolio' />
      <ul className='options-menu'>
        <li>
          <button>
            <FaSave />
          </button>
        </li>
      </ul>
    </ToolbarWrapper>
  );
};

export default PreviewToolbar;
