import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';

export default function Routes() {
  return (  
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact component={CreateAccount} />
        <Route path="/session" exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}