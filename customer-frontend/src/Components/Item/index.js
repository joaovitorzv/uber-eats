import React from 'react';

import Img from '../../assets/thumb-icon.jpeg';

import {
  Container,
  Thumbnail,
  Image,
  Favorite
} from './styles';

export default function Item() {
  return (
    <Container>
      <a href="#">
        <Thumbnail>
          <Image src={Img} />
          <Favorite />
        </Thumbnail>
      </a>
    </Container>
  )
}