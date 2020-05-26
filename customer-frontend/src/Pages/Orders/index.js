import React from 'react';

import Header from '../../Components/Header';
import PastOrder from '../../Components/PastOrder';

import {
  Container
} from './styles';

export default function Orders() {
  return (
    <>
    <Header />
    <Container>
      <h2>Past orders</h2>

      <PastOrder />
      
    </Container>
    </>
  )
}