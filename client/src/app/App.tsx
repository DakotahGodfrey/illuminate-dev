import axios from 'axios';
import Navbar from 'components/Navbar';
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Authenticated from 'views/Authenticated';
import Unauthenticated from 'views/Unauthenticated';
import { selectAuth } from './features/auth/authSlice';
import { useAppSelector } from './hooks';

const App: React.FC = () => {
  const auth = useAppSelector(selectAuth);
  const { user } = auth;
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('/api/current-user', {
        withCredentials: true,
      });
      const resData = res.data;
      console.log(resData);
    };
    getUser();
  }, []);
  return (
    <Router>
      <Navbar />
      <a href='/auth'>Auth</a>
      {!user ? <Unauthenticated /> : <Authenticated />}
    </Router>
  );
};

export default App;
