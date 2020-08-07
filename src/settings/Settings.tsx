import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

interface PropsShape {}

export default (props: PropsShape) => (
  <section>  
      <Formik
        initialValues={{
          voipUsername: 'initial formik value',
          voipPassword: ''
        }}
        onChange={(values: any) => console.log(JSON.stringify(values, null, 2))}
        onBlur={(e: any) => console.log(e)}
        onSubmit={() => console.log("Submitted from Formik")}
      >        
        {
        ({ values, errors, touched, handleChange, handleBlur }) => (
          <form>
            <FormContainer>
          <FormControl>
            { errors.voipUsername }
            <InputLabel htmlFor="voipUsername">Voip.ms Username</InputLabel>
            <Input id="voipUsername" name="voipUsername" type="text" 
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.voipUsername}
            />
        </FormControl>
            <FormControl>
              { errors.voipPassword }
              <InputLabel htmlFor="voipPassword">Voip.ms Password</InputLabel>
              <Input id="voipPassword" name="voipPassword" type="password"
                onChange={handleChange}
                value={values.voipPassword}
              />
            </FormControl>
            </FormContainer>
          </form>
        )}
      </Formik>
  </section>
);


const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
