import { Home } from 'pages';
import { Switch, Route } from 'react-router-dom';

const Authenticated: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
};

export default Authenticated;
