import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from "./navigation/NavMenu";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavMenu />
        <p>placeholder</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
