import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';
import Shop from './pages/Shop';
import SingleProduct from './components/singleProduct/SingleProduct';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/singleItem/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
