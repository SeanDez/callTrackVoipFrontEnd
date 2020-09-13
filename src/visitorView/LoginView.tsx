import React, { useState } from 'react';
import 'isomorphic-fetch';
import dotenv from 'dotenv';

interface PropsShape {}

async function submitLoginInfo(localUserName: string, localPassword: string) {
  const loginRoute = `${process.env.REACT_APP_BACKEND_DOMAIN}/log-in`;
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
    return responseData;
  } catch (error) {
    throw new Error(error);
  }
}

async function handleSubmit(event: any, userName: string, password: string) {
  event.preventDefault(); 
  submitLoginInfo(userName, password);
}


export default (props: PropsShape) => {
  const [localUserName, setLocalUserName] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' value={localUserName} onChange={e => setLocalUserName(e.target.value)} />

        <label>Password</label>
        <input type='password' value={localPassword} onChange={e => setLocalPassword(e.target.value)} />

        <button
          onClick={e => handleSubmit(e, localUserName, localPassword) }
        >Submit</button>
      </form>
    </div>
  )
}