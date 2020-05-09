import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? 
        <Component {...props} />
      : <Redirect to="/login" />
    )} />
  );
};

export default PrivateRoute;