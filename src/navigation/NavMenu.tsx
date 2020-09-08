import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StyledLink from "../shared/StyledLink";

interface PropsShape {
  isAuthenticated: boolean
}

export default (props: PropsShape) => {

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <HorizontalList>
            { props.isAuthenticated && 
              <>
                <StyledLink to='/numbers'>Phone Numbers</StyledLink>
                <StyledLink to='/settings'>Settings</StyledLink>
              </>
            }
            { props.isAuthenticated === false && 
              <>
                <StyledLink to='/log-in'>Log In</StyledLink>
                <StyledLink to='/sign-up'>Sign Up</StyledLink>
              </>
            }
          </HorizontalList>
        </Toolbar>
      </AppBar>
    </header>
  )
} 

const HorizontalList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  border: 2px dotted pink;
  width: 90vw;
  max-width: 1200px;
  padding-left: 0;

  & > * {
    text-decoration: none;
  }
`;