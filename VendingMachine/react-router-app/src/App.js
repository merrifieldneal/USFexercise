// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import Pretzel from './Pretzel';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/eat">Eat</Link>
          <Link to="/drink">Drink</Link>
        </nav>

        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/chips'>
          <Chips />
        </Route>
        <Route exact path='/soda'>
          <Soda />
        </Route>
        <Route exact path='/pretzel'>
          <Pretzel />
        </Route>
      </BrowserRouter>
    </main >
  );
}
export default App;
