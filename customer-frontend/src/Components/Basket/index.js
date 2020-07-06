import React from 'react';
 
import { useBasket } from '../../Context/BasketContext';

import { isAuthenticated } from '../../utils/auth';

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

export default function Basket({ restaurant, history }) {
  const {basket, setBasket, showBasket, setShowBasket} = useBasket();

  const newBasket = JSON.parse(localStorage.getItem('basket')) || [];

  function removeItem(itemId) {
    const item = newBasket.find(basketItem => basketItem.id === itemId);
    if (item.quantity > 1) {
      const unitaryPrice = parseFloat(item.price / item.quantity).toFixed(2);
      item.quantity -= 1;
      item.price = parseFloat(item.price - unitaryPrice).toFixed(2);

      localStorage.setItem('basket', JSON.stringify(newBasket));
      setBasket(newBasket);
    } else {
      const findItemIndex = newBasket.findIndex(basketItem => basketItem.id === itemId);
      newBasket.splice(findItemIndex, 1);
      
      if (newBasket.length === 0) {
        localStorage.removeItem('restaurantInfo')
      } 
      localStorage.setItem('basket', JSON.stringify(newBasket));
      setBasket(newBasket);
    }
  }

  const restaurantOrdered = JSON.parse(localStorage.getItem('restaurantInfo'));

  if (basket.length > 0 && !restaurantOrdered) {
    localStorage.setItem('restaurantInfo', JSON.stringify(restaurant));
  }

  const checkout = () => {
    isAuthenticated() ? history.push('/checkout') : history.push('/signup')
  }

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

      <PaymentOrder onClick={() => checkout()}>
        Next: Payment R${
        basket
          .map( item => parseFloat(item.price))
          .reduce((acc, curr) => acc + curr, 0)
          .toFixed(2)
        }
      </PaymentOrder>
      </> 
      : <p>Your basket is empty</p> 
      }

    </Container>
    </>
  )
}


