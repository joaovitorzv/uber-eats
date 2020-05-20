import React from 'react';

import Img from '../../assets/thumb-icon.jpeg';

import {
  Container,
  Thumbnail,
  Image,
  LinkToRestaurant
} from './styles';

import { Title } from '../../GlobalStyles';

export default function RestaurantItem() {
  return (
    <Container>
      <LinkToRestaurant to="/restaurant/name">
        <Thumbnail>
          <Image src={Img} />
        </Thumbnail>

        <div className="title-container">
          <div>
            <Title size="17px">McDonald's - Guarulhos Paulo Faccini</Title>
            <p>$7.90 Delivery Fee &middot; 15–25 min &middot; $$</p>
          </div>

          <div className="rating">
           <p>New</p> 
          </div>
        </div>

        <p>Burgers</p>
      </LinkToRestaurant>
    </Container>
  )
}