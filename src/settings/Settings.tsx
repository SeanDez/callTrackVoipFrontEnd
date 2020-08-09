import 'es6-promise';
import 'isomorphic-fetch';
import path from 'path';
import React, { useState } from 'react';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

interface PropsShape {}

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

export default (props: PropsShape) => {
  const [voipUserName, setVoipUserName] = useState("");
  const [voipPassword, setVoipPassword] = useState("");

  return (
    <section>
      <form>
        <FormContainer>
          <FormControl>
            <InputLabel htmlFor="voipUsername">Voip.ms Username</InputLabel>
            <Input 
              type="text"
              value={voipUserName}
              onChange={e => setVoipUserName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="voipPassword">Voip.ms Password</InputLabel>
            <Input 
              type="password"
              value={voipUserName}
              onChange={e => setVoipUserName(e.target.value)}
            />
          </FormControl>

          <Button
            type='submit'
            onClick={e => {
              e.preventDefault();
              console.log("voip username", voipUserName);
              console.log('voip password', voipPassword);
            }}
            variant="outlined"
            color="primary"
          >
            Save
          </Button>
        </FormContainer>

      </form>
    </section>
  );
} 


const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border: 2px dashed blue;
`;
