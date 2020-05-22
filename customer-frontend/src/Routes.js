import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';

import Home from  './Pages/Home';
import Restaurant from './Pages/Restaurant';
import Signup from './Pages/Signup';
import Checkout from './Pages/Checkout';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} path="/" exact component={Home} />
        <PublicRoute restricted={false} path="/restaurant/:id" component={Restaurant} />
        <PublicRoute restricetc={true} path="/signup" component={Signup} />

        <PrivateRoute restricted={false} path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}