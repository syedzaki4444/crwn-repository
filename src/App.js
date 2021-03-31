import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';
import Header from './components/header/Header';

import "bulma";





function App() {
  return (
    <div class="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
