import Navbar from 'components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Authenticated from 'views/Authenticated';
import Unauthenticated from 'views/Unauthenticated';
import { useUser } from './hooks';

const App: React.FC = () => {
  const user = useUser();
  return (
    <Router>
      <Navbar isAuth={user !== null} />
      <a href='/auth'>Auth</a>
      {user ? <Authenticated /> : <Unauthenticated />}
    </Router>
  );
};

export default App;
