import React, { Component } from 'react';

import { FiUser } from 'react-icons/fi';

import { HeaderStyle, LinkBtn } from './styles';

class Header extends Component {
  render() {
    return (
    <HeaderStyle>
      <a href="/">
        <img src="https://www.ubereats.com/restaurant/_static/d388e65de8662293c3a262f4c2c7d93a.svg" alt=""/>
      </a>
      <div>
        <LinkBtn white={true} href="/session"><FiUser className="icon" size={20}/> Sign in</LinkBtn>
        <LinkBtn href="/signup">Sign up</LinkBtn>
      </div>
    </HeaderStyle>
    );
  }
}

export default Header;