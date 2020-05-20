import React from 'react';

import Header from '../../Components/Header';
import RestaurantItem from '../../Components/RestaurantItem';
import Basket from '../../Components/Basket';

import BasketProvider from '../../Context/BasketContext';

import {  
  HeaderContainer,
  Container,
  Filter,
  FilterContainer,
  FilterButton,
  RestaurantsGrid,
} from './styles';

import { SubTitleItem, Title, SmallText} from '../../GlobalStyles';

import { FaBiking } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

export default function Home() {
  return (
    <BasketProvider>
      <HeaderContainer>
        <Header />
        <Basket />
      </HeaderContainer>

      <Container>
        <Filter>
          <FilterContainer>
            <FilterButton isSelected={true} > <FaBiking size={20} /> Delivery</FilterButton>
            <FilterButton> <FiShoppingBag size={20} /> Pickup</FilterButton>
          </FilterContainer>
        </Filter>

        <SubTitleItem>
          <Title size="28px">Free deliveries</Title>
          <SmallText>Your favorites food without delivery fee</SmallText>
        </SubTitleItem>
        
        <RestaurantsGrid>
          <RestaurantItem />
          <RestaurantItem />
          <RestaurantItem />
        </RestaurantsGrid>

        <SubTitleItem>
          <Title size="28px">When You're Hungry Now</Title>
          <SmallText>The fastest food to your door</SmallText>
        </SubTitleItem>

        <RestaurantsGrid>
          <RestaurantItem />
          <RestaurantItem />
          <RestaurantItem />
          <RestaurantItem />
          <RestaurantItem />
        </RestaurantsGrid>
      </Container>
    </BasketProvider>
  )
}