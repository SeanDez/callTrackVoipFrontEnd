import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StyledLink from "../shared/StyledLink";

interface DataObject { displayName: string, slug: string }

const linkData: Array<DataObject> = [
  { displayName: 'Phone Numbers', slug: 'numbers' },
  { displayName: 'Settings', slug: 'settings' },
];

interface PropsShape {}

export default (props: PropsShape) => {

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <HorizontalList>
            { linkData.map((dataItem: DataObject) => (
              <StyledLink to={dataItem.slug}>{dataItem.displayName}</StyledLink>
            )) }
          </HorizontalList>
        </Toolbar>
      </AppBar>
    </header>
  )
} 

const HorizontalList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style-type: none;
  border: 2px dotted pink;
  width: 90vw;
  max-width: 1200px;

  & > * {
    text-decoration: none;
  }
`;