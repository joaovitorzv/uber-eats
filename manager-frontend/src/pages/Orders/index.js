import React from 'react';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import OrderCard from '../../components/Order';

import { OrdersContainer, TitleSection  } from './styles';

export default function Orders() {
  return (
    <>
    <Header />
    <Navigation />

    <TitleSection>
        <h2>Orders</h2>
    </TitleSection>

    <OrdersContainer>
      <div className="order-container">
        <OrderCard 
          quantity="3"
          itemName="Burgao do caraio" 
          preferences="No preferences"
          address="Rua dos prazeres, 762"
          district="Morumbi"
          customer="João vitor" 
        />

        <OrderCard 
          quantity="3"
          itemName="Burgao do caraio" 
          preferences="No preferences"
          address="Rua dos prazeres, 762"
          district="Morumbi"
          customer="João vitor" 
        />

        <OrderCard 
          quantity="3"
          itemName="Burgao do caraio" 
          preferences="No preferences"
          address="Rua dos prazeres, 762"
          district="Morumbi"
          customer="João vitor" 
        />

        <OrderCard 
          quantity="3"
          itemName="Burgao do caraio" 
          preferences="No preferences"
          address="Rua dos prazeres, 762"
          district="Morumbi"
          customer="João vitor" 
        />

        <OrderCard 
          quantity="3"
          itemName="Burgao do caraio" 
          preferences="No preferences"
          address="Rua dos prazeres, 762"
          district="Morumbi"
          customer="João vitor" 
        />

        <OrderCard 
          quantity="3"
          itemName="Burgao do caraio" 
          preferences="No preferences"
          address="Rua dos prazeres, 762"
          district="Morumbi"
          customer="João vitor" 
        />
      </div>
    </OrdersContainer>
    </>
  )
}