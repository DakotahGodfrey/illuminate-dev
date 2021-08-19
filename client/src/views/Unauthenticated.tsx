import { Switch, Route } from 'react-router-dom';
import { Home, Lessons, Playground } from 'pages';
const Unauthenticated: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/playground' component={Playground} />
      <Route exact path='/lessons' component={Lessons} />
    </Switch>
  );
};

export default Unauthenticated;
