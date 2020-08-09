import React, { useState } from 'react';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


interface DynamicControlledInput { 
  label: string, 
  htmlName: string, 
  value: string,
  parentStateUpdater: Function
}

interface PropsShape {
  title: string,
  instructions?: string,
  userName: DynamicControlledInput,
  password: DynamicControlledInput,
  submitButton?: boolean,
  repeatPasswordField?: boolean
  singleFieldCallback?: <ReturnType extends string>(field: string, value: string) => ReturnType
}

export default (props: PropsShape) => {
  const [repeatPassword, setRepeatPassword] = useState('');

  return (
    <section>
      <form>
        <FormContainer>
          <h3>{ props.title }</h3>
          <InstructionText>{ props.instructions }</InstructionText>
          <FormControl>
            <InputLabel htmlFor={ props.userName && props.userName.htmlName || 'username' }>
              { props.userName.label || "Username" }
            </InputLabel>
            <Input 
              type="text"
              value={props.userName.value}
              onChange={e => props.userName.parentStateUpdater(e.target.value)}
              name={ props.userName.htmlName || 'username' }
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor={ props.password.htmlName || 'password' }>
              { props.password.label || "Password" }
            </InputLabel>
            <Input 
              type="password"
              value={props.password.value}
              onChange={e => props.password.parentStateUpdater(e.target.value)}
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

          { props.submitButton && 
            <StyledButton
              type='submit'
              onClick={e => {
                e.preventDefault();
                console.log("username", props.userName.value);
                console.log('password', props.password.value);
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