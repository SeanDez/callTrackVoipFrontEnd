import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthLevels from './shared/AuthLevels';

import NavMenu from "./navigation/NavMenu";
import PhoneCalls from "./phoneCalls/PhoneCalls";
import Settings from "./settings/Settings";

import './App.css';

function App() {
  const [authenticationLevel, setAuthenticationLevel]: [AuthLevels, Function] = useState(AuthLevels.visitor);

  return (
    <div>
      <BrowserRouter>
        <NavMenu authenticationLevel={authenticationLevel} />

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
