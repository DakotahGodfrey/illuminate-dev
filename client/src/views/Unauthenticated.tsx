import { Switch, Route } from 'react-router-dom';
import { Home, Playground } from 'pages';
const Unauthenticated: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/playground' component={Playground} />
    </Switch>
  );
};

export default Unauthenticated;
