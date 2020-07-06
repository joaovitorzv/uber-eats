import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Basket from '../../Components/Basket';
import CancelBasket from '../../Components/CancelBasket';

import BasketProvider from '../../Context/BasketContext';

import {
  HeaderContainer,
  BannerContainer,
  RestaurantInfo,
  MenuContainer,
  GridItems,
} from './styles';

import { 
  Title,
  PrimaryLink,
  SubTitleItem
} from '../../GlobalStyles';

import { AiFillTag } from 'react-icons/ai';

import api from '../../services/api';

export default function Restaurant(props) {
  const restaurantInfo = JSON.parse(localStorage.getItem('restaurantInfo')) || []

  const { id } = props.match.params
  const [restaurant, setRestaurant] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/restaurants/${id}/menu`);
      setRestaurant(response.data.restaurant);
      setItems(response.data.items);
    }

    fetchData();
  }, []);

  const response = {
    id: restaurant.id, 
    name: restaurant.restaurant_name, 
    delivery: restaurant.delivery_price
  }

  return (
    <BasketProvider>
      <HeaderContainer>
        <Header />
        <Basket restaurant={response} history={props.history}/>
      </HeaderContainer>

      <BannerContainer banner={restaurant.banner_path}>
        <RestaurantInfo>
          <Title size="30px">{restaurant.restaurant_name}</Title>

          <div className="basic-info">
            <p>$ &middot; {restaurant.culinary}</p>
            <p>20-30 Min &middot; ${restaurant.delivery_price} Delivery Fee</p>
          </div>

          <div className="address">
            <p>{restaurant.restaurant_address} &middot; <PrimaryLink href="#">More info</PrimaryLink></p>
          </div>
        </RestaurantInfo>
      </BannerContainer>

      <MenuContainer>
        <SubTitleItem>
          <Title size="24px"><AiFillTag size={20} color="#734bda" />Special Offers</Title>
        </SubTitleItem>

        <GridItems>
        </GridItems>

        <SubTitleItem>
          <Title size="24px">Items</Title>
        </SubTitleItem>

        {/*restaurantInfo.name !== undefined && restaurantInfo.name !== restaurant.restaurant_name*/ }

        <GridItems>
        {items.map(item => (
          <Item
            key={item.id}
            restaurantId={restaurant.id}
            title={item.title} 
            description={item.description} 
            price={item.price} 
            id={item.id}
            thumbnail={item.thumbnail_path}
            history={props.history}
          />
        ))}
        </GridItems>

      </MenuContainer>
    </BasketProvider>
  )
}