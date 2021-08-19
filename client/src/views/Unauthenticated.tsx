import { Switch, Route } from 'react-router-dom';
import { Home } from 'pages';
const Unauthenticated: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
};

export default Unauthenticated;
