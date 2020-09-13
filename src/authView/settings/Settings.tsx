import 'es6-promise';
import 'isomorphic-fetch';
import path from 'path';
import React, { useState } from 'react';

import EmailPasswordBox from '../../shared/EmailPasswordBox';

enum UpdateTarget {
  userName = "userName",
  password = "password"
}

async function updateAccountDetail(userId: number, targetColumn: UpdateTarget, newValue: string) {
  const updateUrl = path.join(process.env.REACT_APP_BACKEND_DOMAIN!, '/update');
  const bodyParams = { userId, targetColumn, newValue }

  try {
    const response = await fetch(updateUrl, {
      method: 'post',
      mode: 'cors',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bodyParams),
    });

    return response.json();
  }
  catch (error) {
    throw new Error(error);
  }
}

interface PropsShape {}

export default (props: PropsShape) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <EmailPasswordBox
        title="Update Voip.ms Details"
        instructions="Update your Voip.ms account details below"
        userName={{ label: "Voip.ms Username", htmlName: "voipUsername", value: userName, parentStateUpdater: setUserName }} 
        password={{ label: "Voip.ms Password", htmlName: "voipPassword", value: password, parentStateUpdater: setPassword }} 
      />
    </div>
  )
}
