import { Home, Playground } from 'pages';
import { Switch, Route } from 'react-router-dom';

const Authenticated: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/playground' component={Playground} />
    </Switch>
  );
};

export default Authenticated;
