import React from 'react';

import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Basket from '../../Components/Basket';

import BasketProvider from '../../Context/BasketContext';

import {
  HeaderContainer,
  BannerContainer,
  RestaurantInfo,
  MenuContainer,
  GridItems,
} from './styles';

import { 
  Title,
  PrimaryLink,
  SubTitleItem
} from '../../GlobalStyles';

import { AiFillTag } from 'react-icons/ai';

export default function Restaurant() {
  const items = [
    {title: 'Orignal smash', description: 'Foda em man descrisão aq cheddar molho de pinto e picles', price: 12.99, id: 1},
    {title: 'Orignal smash', description: 'Foda em man descrisão aq cheddar molho de pinto e picles', price: 12.99, id: 2},
    {title: 'Orignal smash', description: 'Foda em man descrisão aq cheddar molho de pinto e picles', price: 12.99, id: 3},
    {title: 'Orignal smash', description: 'Foda em man descrisão aq cheddar molho de pinto e picles', price: 12.99, id: 4},
    {title: 'Orignal smash', description: 'Foda em man descrisão aq cheddar molho de pinto e picles', price: 12.99, id: 5}
  ]

  return (
    <BasketProvider>
      <HeaderContainer>
        <Header />
        <Basket />
      </HeaderContainer>

      <BannerContainer>
        <RestaurantInfo>
          <Title size="30px">McDonald's - Guarulhos Paulo Faccini</Title>

          <div className="basic-info">
            <p>$ &middot; Burgers</p>
            <p>20-30 Min &middot; R$7.99 Delivery Fee</p>
          </div>

          <div className="address">
            <p>Av. Paulo Faccini, 1058 - Macedo, São Paulo 07115-060 &middot; <PrimaryLink href="#">More info</PrimaryLink></p>
          </div>
        </RestaurantInfo>
      </BannerContainer>

      <MenuContainer>
        <SubTitleItem>
          <Title size="24px"><AiFillTag size={20} color="#734bda" />Special Offers</Title>
        </SubTitleItem>

        <GridItems>
          <Item id={6} price="4.99" description="good sandwich" title="Sandwich"/>
          <Item id={7} price="4.99" description="good sandwich" title="Sandwich"/>
        </GridItems>

        <SubTitleItem>
          <Title size="24px">Items</Title>
        </SubTitleItem>

        <GridItems>
        {items.map(item => (
          <Item
            key={item.id}
            title={item.title} 
            description={item.description} 
            price={item.price} 
            id={item.id}
          />
        ))}
        </GridItems>

      </MenuContainer>
    </BasketProvider>
  )
}