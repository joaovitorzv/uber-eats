import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './Components/PublicRoute'
import PrivateRoute from './Components/PrivateRoute';

import Home from  './Pages/Home';
import Restaurant from './Pages/Restaurant';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} path="/" exact component={Home} />
        <PublicRoute restricted={false} path="/restaurant/:id" component={Restaurant} />
      </Switch>
    </BrowserRouter>
  )
}