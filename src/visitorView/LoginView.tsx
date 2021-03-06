import React, { useState, useEffect } from 'react';
import 'isomorphic-fetch';
import dotenv from 'dotenv';

interface PropsShape {
  setIsAuthenticated: Function;
}

async function submitLoginInfo(localUserName: string, localPassword: string, props: PropsShape) {
  const loginRoute = `${process.env.REACT_APP_BACKEND_DOMAIN}/login`;
  const loginParams = { localUserName, localPassword };
  const requestBody = JSON.stringify(loginParams);

  try {
    const response = await fetch(loginRoute, {
      method: 'post',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: requestBody
    })

    const responseData = response.json();

    if (typeof responseData !== 'undefined') {
      props.setIsAuthenticated(true);
    }

    return responseData;
  } catch (error) {
    throw new Error(error);
  }
}

async function handleSubmit(event: any, userName: string, password: string, props: PropsShape) {
  event.preventDefault(); 
  submitLoginInfo(userName, password, props);
}

export default (props: PropsShape) => {
  const [localUserName, setLocalUserName] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  // log every state change to the console
  useEffect(() => {
    console.log(localUserName);
  }, [localUserName]);

  useEffect(() => {
    console.log(localPassword)
  }, [localPassword]);

  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input type='text' value={localUserName} onChange={e => setLocalUserName(e.target.value)} />
        </div>

        <div>
          <label>Password</label>
          <input type='password' value={localPassword} onChange={e => setLocalPassword(e.target.value)} />
        </div>

        <button
          onClick={e => handleSubmit(e, localUserName, localPassword, props) }
        >Submit</button>
      </form>
    </div>
  )
}