import React, { useState } from 'react';
 
import { useBasket } from '../../Context/BasketContext';

import { 
  Container, 
  CloseButton,
  BasketButton,
  PaymentOrder,
  BasketItem,
} from './styles';

import { 
  Title,
} from '../../GlobalStyles';

import { IoMdClose } from 'react-icons/io';
import { MdShoppingBasket } from 'react-icons/md';

export default function Basket() {
  const {basket, setBasket} = useBasket();

  const newBasket = JSON.parse(localStorage.getItem('basket')) || [];

  function removeItem(itemId) {
    const findItemIndex = newBasket.findIndex(basketItem => basketItem.id === itemId);
    newBasket.splice(findItemIndex, 1);
    localStorage.setItem('basket', JSON.stringify(newBasket));
    setBasket(newBasket);
  }

  const [showBasket, setShowBasket] = useState('block');
  return (
    <>
    <BasketButton onClick={() => showBasket === 'none' ? setShowBasket('block') : setShowBasket('none')}>
      <MdShoppingBasket size={25} color="#21a453" /> 
      <p>{basket.length}</p>
    </BasketButton>

    <Container display={showBasket} >
      <CloseButton onClick={() => setShowBasket('none')}>
        <IoMdClose size={25} />
      </CloseButton>
      {basket.length > 0  ? 
      <>
      <Title size="28px">Your order</Title>
      <p>From restaurant <a href="/restaurant/name">The house</a></p>

      <div className="items-container">
        {basket.map(item => ( 
        <BasketItem key={item.id} >
          <h3 className="item-name">
            <span>{item.quantity}x </span> 
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </h3>
          <h3 className="item-price">R${item.price}</h3>
         </BasketItem> 
        ))}
      </div>

      <PaymentOrder>
        Next: Payment R${basket
          .map( item => item.price)
          .reduce((acc, curr) => acc + curr, 0)}
      </PaymentOrder>
      </> 
      : <p>Your basket is empty</p> 
      }

    </Container>
    </>
  )
}


