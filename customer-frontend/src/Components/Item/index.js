import React from 'react';

import { useBasket } from '../../Context/BasketContext';

import {
  Container,
  Description,
  Thumbnail,
  BasketQuantity,
} from './styles';

export default function Item({ id, title, description, price }) {
  const item = {name: title, quantity: 1, price: price, id}
  const {setBasket, setShowBasket} = useBasket();

  const addToBasket = () => {
    setShowBasket('block')
    let items = [];

    items.push(item);
    items  = items.concat(JSON.parse(localStorage.getItem('basket') ||'[]'));
    console.log(items);
    
    localStorage.setItem('basket', JSON.stringify(items))
    setBasket(items);
  }
  
  
  return (  
    <Container onClick={() => addToBasket(id)}>
        <Description> 
          <h2>{title}</h2>
          <p>{description}</p>

          <h2 className="price">R${price}</h2>
        </Description>
        <Thumbnail>
          <BasketQuantity>
          </BasketQuantity>
        </Thumbnail>
    </Container>
  )
}