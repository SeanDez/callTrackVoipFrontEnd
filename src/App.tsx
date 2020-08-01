import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavMenu from "./navigation/NavMenu";
import PhoneCalls from "./phoneCalls/PhoneCalls";
import Settings from "./settings/Settings";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavMenu />

        <main>
          <Switch>
            <Route path="/numbers"><PhoneCalls /></Route>
            <Route path='/settings'><Settings /></Route>
          </Switch>
        </main>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
