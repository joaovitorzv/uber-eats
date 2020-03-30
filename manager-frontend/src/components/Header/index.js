import React from 'react';
import { FiUser } from 'react-icons/fi';

import { HeaderStyle, LinkBtn } from './styles';
import { WhiteButton } from '../../global-styles';

import { isAuthenticated, signOut } from '../../utils/auth';

export default function Header() {
  const HandleLogout = () => {
    signOut();
  }

  return (
  <HeaderStyle>
    <a href="/">
      <img src="https://www.ubereats.com/restaurant/_static/d388e65de8662293c3a262f4c2c7d93a.svg" alt=""/>
    </a>
    <div> { isAuthenticated() ? <WhiteButton onClick={HandleLogout}>Logout</WhiteButton> :
      <>
      <LinkBtn white={true} href="/session"><FiUser className="icon" size={20}/> Sign in</LinkBtn>
      <LinkBtn href="/">Sign up</LinkBtn>
      </>
    }
    </div>
  </HeaderStyle>
  );
}
