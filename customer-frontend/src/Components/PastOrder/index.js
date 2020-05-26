import React from 'react';

import {
  OrdersContainer,
  Order,
  OrderDetails,
  RestaurantThumbnail,
  OrderAgain
} from './styles';

export default function Orders() {
  return (
  <OrdersContainer>
    <Order>
      <OrderDetails>
        <RestaurantThumbnail />
        <div className="details">
          <h2>McDonalt's - Av. Faria Lima</h2>
          <p>3 items for R$ 0,00 &middot; 25 mai. 11:01</p>

          <div className="items">
            <div className="items-quantity">
              <div className="quantity">1</div>
            </div>

            <div className="item-detail">
              <h3>McOferta McPicanha</h3>
              <p>
                McPicanha • Molho de Picanha • Queijo Coalho • Carne Picanha • Tomate • Cebola Crispy • Mix Folha • Pão Brioche Gergilim • Batata Cheddar Bacon • Fanta Guaraná 
              </p>
            </div>
          </div>

          <div className="items">
            <div className="items-quantity">
              <div className="quantity">2</div>
            </div>

            <div className="item-detail">
              <h3>McOferta McPicanha</h3>
              <p>
                McPicanha • Molho de Picanha • Queijo Coalho • Carne Picanha • Tomate • Cebola Crispy • Mix Folha • Pão Brioche Gergilim • Batata Cheddar Bacon • Fanta Guaraná 
              </p>
            </div>
          </div>
        </div>

        
      </OrderDetails>
      <OrderAgain>
        <button>Order Again</button>
      </OrderAgain>
    </Order>
  </OrdersContainer>
  )
}