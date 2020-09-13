import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavMenu from "../navigation/NavMenu";
import PhoneCalls from "./phoneCalls/PhoneCalls";
import Settings from './settings/Settings';

interface PropsShape {
  isAuthenticated: boolean;
}

export default (props: PropsShape) => {

  return (
    <div>
    <NavMenu isAuthenticated={props.isAuthenticated} />

    <main>
      <Switch>
        <Route path='/settings'><Settings /></Route>
        
        {/* catch-all auth route */}
        <Route path='/numbers'><PhoneCalls /></Route>
      </Switch>
    </main>
  </div>
  )
}