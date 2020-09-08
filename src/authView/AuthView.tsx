import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavMenu from "../navigation/NavMenu";
import PhoneCalls from "../phoneCalls/PhoneCalls";
import Settings from '../settings/Settings';

interface PropsShape {}

export default (props: PropsShape) => {

  return (
    <div>
    <NavMenu isAuthenticated={true} />

    <main>
      <Switch>
        <Route path="/numbers"><PhoneCalls /></Route>
        <Route path='/settings'><Settings /></Route>
      </Switch>
    </main>
  </div>
  )
}