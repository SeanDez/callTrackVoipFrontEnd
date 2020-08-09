import 'es6-promise';
import 'isomorphic-fetch';
import path from 'path';
import React, { useState } from 'react';

import EmailPasswordBox from '../shared/EmailPasswordBox';

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

  return (
    <div>
      <EmailPasswordBox
        title="Update Voip.ms Details"
        instructions="You may update your username, password, or both together."
        userName={{ label: "Voip.ms Username", htmlName: "voipUsername"  }} 
        password={{ label: "Voip.ms Password", htmlName: "voipPassword"  }} 
        saveButton
      />
    </div>
  )
}
