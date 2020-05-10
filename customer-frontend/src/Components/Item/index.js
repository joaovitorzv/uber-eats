import React from 'react';

import {
  Container,
  Description,
  Thumbnail
} from './styles';

export default function Item() {
  return (
    <Container onClick={() => alert('Fuedase')}>
        <Description>
          <h2>Original Smash</h2>
          <p>Pão artesão anal, Burger top 100g, queijo cualho derretido na grelha salve alek caraio mec trab xesquedele salve mec trab</p>
        
          <h2 className="price">R$12.99</h2>
        </Description>
        <Thumbnail />
    </Container>
  )
}