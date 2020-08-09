import React, { useState } from 'react';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

interface PropsShape {
  title: string,
  instructions?: string,
  userName?: { label?: string, htmlName?: string },
  password?: { label?: string, htmlName?: string },
  saveButton?: boolean,
  repeatPasswordField?: boolean
}

export default (props: PropsShape) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <section>
      <form>
        <FormContainer>
          <h3>{ props.title }</h3>
          <InstructionText>{ props.instructions }</InstructionText>
          <FormControl>
            <InputLabel htmlFor={ props.userName && props.userName.htmlName || 'username' }>
              { props.userName && props.userName.label || "Username" }
            </InputLabel>
            <Input 
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              name={ props.userName && props.userName.htmlName || 'username' }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor={ props.password && props.password.htmlName || 'password' }>
              { props.password && props.password.label || "Password" }
            </InputLabel>
            <Input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>

          { props.repeatPasswordField && 
            <FormControl>
            <InputLabel htmlFor='repeatPassword'>
              Repeat Password
            </InputLabel>
            <Input 
              type="repeatPassword"
              value={repeatPassword}
              onChange={e => setRepeatPassword(e.target.value)}
            />
          </FormControl>
          }

          { props.saveButton && 
            <StyledButton
              type='submit'
              onClick={e => {
                e.preventDefault();
                console.log("username", userName);
                console.log('password', password);
              }}
              variant="outlined"
              color="primary"
            >
              Save
            </StyledButton>
          }
          
        </FormContainer>

      </form>
    </section>
  );
} 


const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border: 2px dashed blue;
`;

const InstructionText = styled.p`
  font-style: italic;
  font-size: .8rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`