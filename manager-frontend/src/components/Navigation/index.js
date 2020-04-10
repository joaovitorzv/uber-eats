import React from 'react';

import { NavigationContainer, UserLogged, ButtonLink } from './styles';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Navigation() {
  const restaurant = JSON.parse(localStorage.getItem('userLogged'));

  return (
    <NavigationContainer>
      <UserLogged>
        <h2><FaRegUserCircle />{restaurant.restaurant_name}</h2>
      </UserLogged>

      <ul>
        <ButtonLink to="/dashboard"><li>Analitycs</li></ButtonLink>
        <ButtonLink to="/dashboard/orders"><li>Orders</li></ButtonLink>
        <ButtonLink to="/dashboard/menu"><li>Menu</li></ButtonLink>
        <ButtonLink to="/dashboard"><li>Payments</li></ButtonLink>
      </ul>
    </NavigationContainer>
  )
}