import React from 'react';

import { 
  HeaderContainer, 
  Logo, 
  LocationOptions,
  DeliverTime, 
  SearchOptions, 
  LocationInput,
  Search,
  BasketButton
} from './styles';
import { Anchor, Title } from '../../GlobalStyles'; 

import { FaMapMarkerAlt, FaSearch, FaClock } from 'react-icons/fa';
import { MdShoppingBasket } from 'react-icons/md';

import HorizontalBrand from '../../assets/ue_logo_horizontal.png';

export default function Header() {
  return (
    <HeaderContainer>
      <LocationOptions>
        <Anchor href="/">
          <Logo src={HorizontalBrand} />
        </Anchor>

        <LocationInput>
          <FaMapMarkerAlt size={20} />
          <Title >Avenida Brigadeiro Faria Lima</Title>
        </LocationInput>

        <DeliverTime>
          <FaClock size={20} />
          <Title >Deliver Now</Title>
        </DeliverTime>
      </LocationOptions>


      <SearchOptions>
        <Search>
          <FaSearch size={20} />
          <Title>Search</Title>
        </Search>

        <Title>
          <Anchor href="/">Sign in</Anchor>
        </Title>


        <BasketButton onClick={() => alert('Show basket items')}>
          <MdShoppingBasket size={25} color="#21a453" /> 
          <p>3</p>
        </BasketButton>

      </SearchOptions>
    </HeaderContainer>
  )
}