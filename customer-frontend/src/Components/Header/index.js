import React, { useState } from 'react';

import { 
  HeaderContainer, 
  Logo, 
  LocationOptions,
  DeliverTime, 
  SearchOptions, 
  LocationInput,
  Search,
  CustomerButton,
  ToggleMenuContainer,
  ToggleMenu
} from './styles';
import { Anchor, Title } from '../../GlobalStyles'; 

import { 
  FaMapMarkerAlt, 
  FaSearch, 
  FaClock, 
  FaReceipt, 
  FaHeart,
  FaWallet,
  FaRegLifeRing,
  FaUser
} from 'react-icons/fa';

import { AiTwotoneTag } from 'react-icons/ai';

import HorizontalBrand from '../../assets/ue_logo_horizontal.png';

import { isAuthenticated, SignOut } from '../../utils/auth';

export default function Header() {
  let customer;
  let firstname;
  let fullname;
  const getFirstName = () => {
    customer = JSON.parse(localStorage.getItem('customer'));
    fullname = (customer.name).split(' ')
    firstname = fullname[0] + ' ' + fullname[1];

    return firstname;
  }

  const [toggleMenu, setToggleMenu] = useState('none');
  return (
    <HeaderContainer>
      <LocationOptions>
        <Anchor to="/">
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
      
      {isAuthenticated() ?
      <ToggleMenuContainer>
        {window.onscroll = function() { setToggleMenu('none') }}
        <Title onClick={() => toggleMenu === 'none' ? setToggleMenu('block') : setToggleMenu('none')}>
          <CustomerButton><FaUser size={20} />{getFirstName()}</CustomerButton>
        </Title>
        <ToggleMenu toggleMenu={toggleMenu}>
           <ul>
           <Anchor to="/1/orders"><li><div className="option-icon"><FaReceipt size={12}/></div>Orders</li></Anchor>
            <li><div className="option-icon"><FaHeart size={12}/></div>Favorites</li>
            <li><div className="option-icon"><FaWallet size={12}/></div>Wallet</li>
            <li><div className="option-icon"><FaRegLifeRing size={12}/></div>Help</li>
            <li><div className="option-icon"><FaUser size={12}/></div>Account</li>
            <li><div className="option-icon"><AiTwotoneTag size={12}/></div>Promotions</li>
            <li onClick={() => SignOut()} >Sign Out</li>
          </ul>
        </ToggleMenu>
      </ToggleMenuContainer>
        : 
        <Title>
          <Anchor to="/login">Sign in</Anchor>
        </Title>
      }

      </SearchOptions>
    </HeaderContainer>
  )
}