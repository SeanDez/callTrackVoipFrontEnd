import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavMenu from '../navigation/NavMenu';
import SalesPage from './salesPage/SalesPage';
import LoginView from './LoginView';

interface PropsShape {
  isAuthenticated: boolean;
}

export default (props: PropsShape) => (
  <div>
    <NavMenu isAuthenticated={props.isAuthenticated} />

    <Switch>
      <Route path='/log-in'><LoginView /></Route>
      <Route path='/' exact><SalesPage /></Route>
    </Switch>
  </div>
)