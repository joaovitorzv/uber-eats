import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './Components/PublicRoute'
import PrivateRoute from './Components/PrivateRoute';

import Home from './Pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} path="/" component={Home} />

      </Switch>
    </BrowserRouter>
  )
}