import React, { useState } from 'react';

import { 
  Container, 
  CloseButton,
  BasketButton
} from './styles';

import { 
  Title 
} from '../../GlobalStyles';

import { IoMdClose } from 'react-icons/io';
import { MdShoppingBasket } from 'react-icons/md';

export default function Basket(props) {
 const [showBasket, setShowBasket] = useState('none');

  return (
    <>
    <BasketButton onClick={() => showBasket === 'none' ? setShowBasket('block') : setShowBasket('none')}>
      <MdShoppingBasket size={25} color="#21a453" /> 
      <p>3</p>
    </BasketButton>

    <Container display={showBasket} >
      <CloseButton onClick={() => setShowBasket('none')}>
        <IoMdClose size={25} />
      </CloseButton>
      <Title size="28px">Your order</Title>
    </Container>
    </>
  )
}