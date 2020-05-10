import React from 'react';

import {
  Container,
  Description,
  Thumbnail,
  BasketQuantity,
} from './styles';

export default function Item({ onBasket }) {
  return (
    <Container onClick={() => alert('Fuedase')} haveOnBasket={onBasket} >
        <Description>
          <h2>Original Smash</h2>
          <p>Pão artesão anal, Burger top 100g, queijo cualho derretido na grelha salve alek caraio mec trab xesquedele salve mec trab</p>
        
          <h2 className="price">R$12.99</h2>
        </Description>
        <Thumbnail>
          <BasketQuantity haveOnBasket={onBasket}>
            {onBasket}
          </BasketQuantity>
        </Thumbnail>
    </Container>
  )
}