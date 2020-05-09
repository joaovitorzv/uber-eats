import React from 'react';

import Header from '../../Components/Header';
import Item from '../../Components/Item';

import {  
  Container,
  FilterContainer,
  FilterButton,
  SubTitleItem,
} from './styles';

import { Title, SmallText } from '../../GlobalStyles';

import { FaBiking } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';

export default function Home() {
  return (
    <>
    <Header />

    <Container>
      <FilterContainer>
        <FilterButton isSelected={true} > <FaBiking size={20} /> Delivery</FilterButton>
        <FilterButton> <FiShoppingBag size={20} /> Pickup</FilterButton>
      </FilterContainer>
    </Container>

    <SubTitleItem>
      <Title size="28px">Free deliveries</Title>
      <SmallText>Your favorites food without delivery fee</SmallText>
    </SubTitleItem>

    <Item />

    </>
  )
}