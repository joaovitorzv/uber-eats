import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';

export default function Routes() {
  return (  
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={true} path="/signup" exact component={CreateAccount} />
        <PublicRoute restricted={false} path="/session" exact component={Login} />

        <PrivateRoute path="/dashboard" />
      </Switch>
    </BrowserRouter>
  )
}