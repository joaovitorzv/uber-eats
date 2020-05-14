import React, { useState } from 'react';

import { 
  Container, 
  CloseButton,
  BasketButton,
  BasketItem,
  PaymentOrder,
} from './styles';

import { 
  Title,
  SmallText, 
} from '../../GlobalStyles';

import { IoMdClose } from 'react-icons/io';
import { MdShoppingBasket } from 'react-icons/md';

import BasketItems from '../../Components/basketItems';

export default function Basket(props) {
  const [showBasket, setShowBasket] = useState('block');
  const items =  [
    {id: 0, quantity: 2, name: 'Dogao mec', price: 32.95}, 
    {id: 1, quantity: 1, name: 'Bavaria', price: 3.00},
    {id: 2, quantity: 1, name: 'Bavaria', price: 6.00},
  ];
  const itemsSum = items
    .map(item => item.price)
    .reduce((prev, curr) => prev + curr, 0);

  const [basketItems, setBasketItems] = useState([])

  return (
    <>
    <BasketButton onClick={() => showBasket === 'none' ? setShowBasket('block') : setShowBasket('none')}>
      <MdShoppingBasket size={25} color="#21a453" /> 
      <p>{items.length}</p>
    </BasketButton>

    <Container display={showBasket} >
      <CloseButton onClick={() => setShowBasket('none')}>
        <IoMdClose size={25} />
      </CloseButton>
      {
      items.length > 0  ? 
      <>
      <Title size="28px">Your order</Title>
      <p>From restaurant <a href="#">The house</a></p>

      <div className="items-container">
        {items.map(item => ( 
          <BasketItems itemData={item} key={item.id}/> 
        ))}
      </div>

      <PaymentOrder onClick={() => setBasketItems(items)}>
        Next: Payment R${itemsSum}
      </PaymentOrder>
      </>
      : <p>Your basket is empty</p> 
      }

      {console.log(basketItems) }
    </Container>
    </>
  )
}