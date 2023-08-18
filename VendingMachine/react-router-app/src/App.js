// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Pretzel from './components/Pretzel';

function App() {
  return (
    <main className="App">
      <BrowserRouter>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/soda">Soda</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/pretzel">Pretzel</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/pretzel' element={<Pretzel />} />
        </Routes>
      </BrowserRouter>
    </main >
  );
}
export default App;
