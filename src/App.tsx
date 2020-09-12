import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import 'es6-promise';
import 'isomorphic-fetch';
import dotenv from 'dotenv';
import moment from 'moment';

import Loader from './shared/Loader';
import VisitorView from './visitorView/VisitorView';
import AuthView from './authView/AuthView';

import './App.scss';

dotenv.config();

/*
  test endpoint to connect both apps
*/
async function testExpressConnection() {
  console.log('testExpressConnection before try block');
  try {
    console.log('testExpressConnection inside try block');
    const response = await fetch('http://localhost:6800/', {
      method: 'get',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    });
    console.log('response to testExpressConnection', response);
    const json = await response.json();  
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(error);
  }
}

// do an initial request to see if the user is logged in already
async function seeIfActiveUserSession(setIsAuthenticated: Function) {
  const authCheckEndpoint = `/authCheck`;

  try {
    const response = await fetch(authCheckEndpoint, {
      method: 'get',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      }
    })

    const responseCode = response.status;
    console.log('response to /authCheck', response);
    if (responseCode >= 300) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchAndSetCampaignAndCallData(setCampaignCallData: Function) {
  const accountDataEndpoint = `/accountData`;
  console.log('accountDataEndpoint', accountDataEndpoint)

  try {
    const response = await fetch(accountDataEndpoint, {
      method: 'get',
      // mode: 'cors',
      headers: {
        'content-type': 'application/json'
      }
    });

    const accountData = await response.json();
    setCampaignCallData(accountData);
  } catch (error) {
    throw new Error(error);
  }
}


function App() {
  // state and path variables
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated]: [boolean, Function] = useState(true);
  const [campaignCallData, setCampaignCallData] = useState(null);
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    const currentTimestamp = moment();
    console.log('Updated at: ', currentTimestamp.format('YYYY-MM-DD hh:mm:ssa Z'));

    testExpressConnection();
  })

  /*
    On Initial render and auth state changes only
    
    Attempt to authenticate the user
    
    If auth, fetch data, assign to state
  */
  useEffect(() => {
    seeIfActiveUserSession(setIsAuthenticated);

    // fetch data only if isAuth changes, and is true
    // no await. The promise resolution is unclear
    if (isAuthenticated) {
      fetchAndSetCampaignAndCallData(setCampaignCallData);
    }
  }, [isAuthenticated])

  useEffect(() => {
    console.log('campaignCallData', campaignCallData)
  }, [campaignCallData]);

  // conditional render
  if (isLoading) {
    return <Loader />
  } else if (isAuthenticated) {
    return <AuthView />
  }

  return <VisitorView />
}

export default App;
