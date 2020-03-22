import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateAccount from './pages/CreateAccount';

export default function Routes() {
  return (  
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateAccount} />
      </Switch>
    </BrowserRouter>
  )
}