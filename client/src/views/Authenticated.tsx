import { Home, LessonContents, Lessons, Playground } from 'pages';
import { Switch, Route } from 'react-router-dom';

const Authenticated: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/playground' component={Playground} />
      <Route exact path='/lessons' component={Lessons} />
      <Route exact path='/lessons:id' component={LessonContents} />
    </Switch>
  );
};

export default Authenticated;
