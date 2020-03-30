import React from 'react';

import { NavigationContainer, UserLogged, ButtonLink } from './styles';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Navigation() {
  return (
    <NavigationContainer>
      <UserLogged>
        <h2><FaRegUserCircle /> Fogo Vivo Grelhados</h2>
      </UserLogged>

      <ul>
        <ButtonLink to="/dashboard"><li>Menu</li></ButtonLink>
        <ButtonLink to="/orders"><li>Orders</li></ButtonLink>
        <ButtonLink to="/dashboard"><li>Analitycs</li></ButtonLink>
        <ButtonLink to="/dashboard"><li>Payments</li></ButtonLink>
        <ButtonLink to="/dashboard"><li>Deliverymans</li></ButtonLink>
      </ul>
    </NavigationContainer>
  )
}