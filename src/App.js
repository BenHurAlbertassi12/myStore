import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoProvider from './context/TodoProvider';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Finished from './pages/Finished';

import './Css/App.css';

function App() {
  return (
    <div>
      <TodoProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/productdetails" component={ ProductDetails } />
            <Route path="/cart" component={ Cart } />
            <Route path="/finished" component={ Finished } />
          </Switch> 
        </BrowserRouter>        
      </TodoProvider>
    </div>
  );
}

export default App;
