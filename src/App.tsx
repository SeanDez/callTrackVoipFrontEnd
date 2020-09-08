import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import 'es6-promise';
import 'isomorphic-fetch';
import dotenv from 'dotenv';
import path from 'path';

import Loader from './shared/Loader';
import NavMenu from "./navigation/NavMenu";
import PhoneCalls from "./phoneCalls/PhoneCalls";
import Settings from "./settings/Settings";
import SalesPage from './salesPage/SalesPage';
import VisitorView from './visitorView/VisitorView';
import AuthView from './authView/AuthView';

import './App.scss';

dotenv.config();

// do an initial request to see if the user is logged in already

async function testIfUserIsLoggedIn(setIsAuthenticated: Function) {
  const authCheckEndpoint = path.join(process.env.REACT_APP_BACKEND_DOMAIN!, '/authCheck');

  try {
    const response = await fetch(authCheckEndpoint, {
      method: 'get',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      }
    })

    const responseCode = response.status;
    if (responseCode >= 300) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchCampaignAndCallData() {
  const accountDataEndpoint = path.join(process.env.REACT_APP_BACKEND_DOMAIN!, '/accountData');

  try {
    const response = await fetch(accountDataEndpoint, {
      method: 'get',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    });

    const accountData = await response.json();
  } catch (error) {
    throw new Error(error);
  }
}


function App() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated]: [boolean, Function] = useState(false);
  const [accountData, setAccountData] = useState([]);

  // handle initial auth state and data fetch
  useEffect(() => {

  }, [isAuthenticated, accountData])

  if (isLoading) {
    return <Loader />
  } else if (isAuthenticated) {
    return <AuthView />
  }

  return <VisitorView />

  // this is an auth view, or the start of one
  // except the sales page
  return (
    <div>
      <NavMenu isAuthenticated={isAuthenticated} />

      <main>
        <Switch>
          <Route path="/numbers"><PhoneCalls /></Route>
          <Route path='/settings'><Settings /></Route>
          <Route path='/' exact><SalesPage /></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
