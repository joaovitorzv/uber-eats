import React from 'react';

import Img from '../../assets/thumb-icon.jpeg';

import {
  Container,
  Thumbnail,
  Image,
  Favorite
} from './styles';

import { Title } from '../../GlobalStyles';

export default function Item() {
  return (
    <Container>
      <a href="#">
        <Thumbnail>
          <Image src={Img} />
        </Thumbnail>

        <div className="title-container">
          <Title size="17px">McDonald's - Guarulhos Paulo Faccini</Title>
          <p>15–25 min • $</p>
        </div>

        <p>Burgers</p>
      </a>
    </Container>
  )
}