import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem 2.4rem;
  background-color: #c4c4c4;
  min-height: 10rem;
  ul {
    display: flex;
    align-items: center;
    width: max-content;
    li {
      margin-right: 1.6rem;
      padding: 0.5rem 2rem;
      border-radius: 20px;
      text-align: center;
      background-color: #fff;
      filter: drop-shadow(2px 2px 1px #333);
      a {
        font-size: 2rem;
        color: #333;
      }
    }
  }
`;
interface NavProps {
  isAuth?: boolean;
}
const Navbar: React.FC<NavProps> = ({ isAuth }) => {
  return (
    <NavWrapper>
      <div className='logo'>Logo.</div>
      {isAuth ? (
        <ul>
          <li>
            <Link to={'/lessons'}>Lessons</Link>
          </li>
          <li>
            <Link to={'/projects'}>Projects</Link>
          </li>
          <li>
            <Link to={'/playground'}>Playground</Link>
          </li>
          <li>
            <Link to={'/profile'}>Playground</Link>
          </li>
          <li>
            <a href='/auth/logout'>Logout</a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={'/lessons'}>Lessons</Link>
          </li>
          <li>
            <Link to={'/playground'}>Playground</Link>
          </li>
          <li>
            <a href='/auth'>Login</a>
          </li>
        </ul>
      )}
    </NavWrapper>
  );
};

export default Navbar;
