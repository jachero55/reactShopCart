import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';
import Shop from './pages/Shop';
import SingleProduct from './components/singleProduct/SingleProduct';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/singleItem/:id" component={SingleProduct} />
      </Switch>
    </div>
  );
}

export default App;
