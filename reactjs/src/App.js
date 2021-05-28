import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';
import Shop from './pages/Shop';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
