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
      <Item  id="1" title="Combo Mega stacker - 2.0" description="Free refil, Batata Media, Mega Stacker Duplo" price="27"/>
      <Item  id="2" title="Big Tasty" description="Pinto haha xisde" price="12"/>
      <Item  id="3" title="Canastra burges" description="Muito querijo com presunt" price="12"/>
      <Item  id="4" title="Puta do bairro" description="Varias puta mec mec" price="12"/>
      <Item  id="5" title="Senhor alberto X" description="X tudao do senhor alberoto" price="12"/>
      <Item  id="6" title="Carlão de 4" description="Completao do carlao com queijo parmesa" price="12"/>
    </MenuContainer>
    </>
  )
}