import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Authenticated from 'views/Authenticated';
import Unauthenticated from 'views/Unauthenticated';
import { selectAuth } from './features/auth/authSlice';
import { useAppSelector } from './hooks';

const App: React.FC = () => {
  const auth = useAppSelector(selectAuth);
  const { user } = auth;

  return <Router>{!user ? <Unauthenticated /> : <Authenticated />}</Router>;
};

export default App;
