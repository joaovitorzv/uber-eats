import React from 'react';

import { MenuContainer } from './styles';

import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Item from '../../components/Item';

export default function Dashaboard() {
  return (
    <>
    <Header />
    <Navigation />
    <MenuContainer>
      <Item name="X Tudo 12" description="Free refil, Batata Media, Mega Stacker Duplo" />
      <Item name="Big mac" description="Pinto haha xisde" />
    </MenuContainer>
    </>
  )
}