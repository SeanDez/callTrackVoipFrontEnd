import React from 'react';

import NavMenu from '../navigation/NavMenu';
import SalesPage from '../salesPage/SalesPage';

interface PropsShape {

}

export default () => (
  <div>
    <NavMenu isAuthenticated={false} />
    <SalesPage />
  </div>
)