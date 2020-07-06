import React from 'react';

import { MdClose } from 'react-icons/md'

import {
  Container
} from './styles';

import {
  BlackButton,
  Title
} from '../../GlobalStyles';


export default function CancelBasket({ history }) {
  function closeModal(action) {
    document.getElementById('modal').style.display = action
    history.push('/')
  } 


  return (
    <Container id="modal">
      <div id="content">
        <div>
          <button id="close-btn" onClick={() => closeModal('none')}>
            <MdClose size={25} />
          </button>
        </div>
        <Title size={25}>Create new order?</Title>
        <p>You have items of Panda express restaurant in your basket, create a new order to add items of Burger King</p>
        <BlackButton id="accept-btn" onClick={() => {}}>New order</BlackButton>
      </div>
    </Container>
  )
}