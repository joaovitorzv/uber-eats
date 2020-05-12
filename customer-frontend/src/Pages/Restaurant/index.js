import React from 'react';

import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Basket from '../../Components/Basket';

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
  return (
    <>
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
        <Item />
        <Item />
      </GridItems>

      <SubTitleItem>
        <Title size="24px">Items</Title>
      </SubTitleItem>

      <GridItems>
        <Item />
        <Item onBasket={1} />
        <Item />
        <Item />
        <Item />
      </GridItems>

    </MenuContainer>  
    
    </>
  )
}