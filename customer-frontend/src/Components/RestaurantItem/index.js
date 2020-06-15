import React from 'react';

import Img from '../../assets/thumb-icon.jpeg';

import {
  Container,
  Thumbnail,
  Image,
  LinkToRestaurant
} from './styles';

import { Title } from '../../GlobalStyles';

export default function RestaurantItem({ restaurant }) {
  return (
    <Container>
      <LinkToRestaurant to={`/restaurant/${restaurant.id}`}>
        <Thumbnail>
          <Image src={`http://localhost:3333/files/${restaurant.banner_path}`} />
        </Thumbnail>

        <div className="title-container">
          <div>
            <Title size="17px">{restaurant.restaurant_name}</Title>
            <p>${restaurant.delivery_price} Delivery Fee &middot; 15–25 min &middot; $$</p>
          </div>

          <div className="rating">
           <p>New</p> 
          </div>
        </div>

        <p>{restaurant.culinary}</p>
      </LinkToRestaurant>
    </Container>
  )
}