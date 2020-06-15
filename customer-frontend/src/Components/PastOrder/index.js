import React from 'react';

import {
  OrdersContainer,
  Order,
  OrderDetails,
  RestaurantThumbnail,
  OrderAgain
} from './styles';

export default function Orders({ order }) {
  return (
  <OrdersContainer>
    <Order>
      <OrderDetails>
        <RestaurantThumbnail banner={order.restaurant.banner_path} />
        <div className="details">
          <h2>{order.restaurant.restaurant_name}</h2>
          <p>{(order.items).length} {(order.items).length > 1 ? "items" : "item"} for R$ {order.subtotal} &middot; 25 mai. 11:01</p>

          {order.items.map(item => (
            <div className="items" key={item.item_id}>
              <div className="items-quantity">
                <div className="quantity">{item.quantity}</div>
              </div>

              <div className="item-detail">
                <h3>{item.item_name}</h3>
                <p>{item.item_description}</p>
              </div>
            </div>
          ))}


        </div>

        
      </OrderDetails>
      <OrderAgain>
        <button>Order Again</button>
      </OrderAgain>
    </Order>
  </OrdersContainer>
  )
}