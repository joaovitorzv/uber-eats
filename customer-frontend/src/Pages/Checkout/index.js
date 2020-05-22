import React from 'react';

import Header from '../../Components/Header';

import { Container,  Details, Delivery, Order, PlaceOrder, ClearBasket } from './styles';
import { SecondaryLink, BlackButton } from '../../GlobalStyles';

import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdShoppingBasket } from 'react-icons/md';
import Cash from '../../assets/cash.png';

export default function Checkout({ history }) {

  const restaurant = JSON.parse(localStorage.getItem('restaurantInfo'));
  const items = JSON.parse(localStorage.getItem('basket'));
  const subtotal = items
    .map(item => parseFloat(item.price))
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  let smallorder;
  subtotal < 15.00 ? smallorder = false : smallorder = true;  

  const serviceFee = ((subtotal * 5) / 100).toFixed(2);
  let total = (parseFloat(serviceFee) + parseFloat(subtotal) + restaurant.delivery).toFixed(2);
  if (smallorder === true) {
    total += 3.00;
    console.log('maluco')
  }

  return ( 
    <>
    <Header />
    <Container>
    { items.length > 0 ?
        <Details>
          <Delivery>
            <h2>Delivery details</h2>
            
            <div className="address">
              <div className="details">
                <h3>Av. Brg. Faria Lima - Pinheiros, São Paulo - SP, Brazil</h3>
                <p>Delivery to door, 2290</p>
                <button>Add delivery instructions</button>
              </div>

              <div className="details">
                <h3>25-35 Min</h3>
                <p>Estimated arrival</p>
              </div>
            </div>

            <h2>Payment</h2>
            
            <div className="payment">
              <img src={Cash} alt="cash"/>
              <h3>Cash</h3>
            </div>

          </Delivery>

          <Order>
            <div className="order-detail">
              <MdShoppingBasket size={25}/> <h3>From</h3> <SecondaryLink to="/restaurant/name">{restaurant.name}</SecondaryLink>
            </div>

            <div className="order-detail">
              <FaClock size={20}/> <h3>Arriving in 25-35 Min</h3>
            </div>

            <div className="order-detail">
              <FaMapMarkerAlt size={20}/> <h3>Meet at door, Avenida Brigadeiro Faria Lima</h3>
            </div>

            <div className="receipt">

              <div className="receipt-item">
                <h3>Subtotal &middot; <span>{items.length} item</span></h3>
                <h3>R${subtotal}</h3>
              </div>

              <div className="fees">
                <h3>Fees</h3>

                <div className="receipt-item" style={smallorder ? {display: 'none' } : {display: 'flex'}}>
                  <p>Small order</p>
                  <h3>R$1.00</h3>
                </div>

                <div className="receipt-item">
                  <p>Service</p>
                  <h3>R${serviceFee}</h3>
                </div>

                <div className="receipt-item">
                  <p>Delivery</p>
                  <h3>R${restaurant.delivery}</h3>
                </div>
                
                <div className="total">
                  <h3>Total</h3>
                  <h3>R${total}</h3>
                </div>
              </div>
            </div>

            <div>
              <h3>No promotion applied</h3>
            </div>

            <PlaceOrder>
              Place order
            </PlaceOrder>
          </Order>
      </Details>
      : 
      <ClearBasket onClick={() => history.push('/')}>
        <h2>You’re not picky.</h2>
        <p>You just have discerning taste.</p>
        <BlackButton>Back to restaurants</BlackButton>
      </ClearBasket>
    }
    </Container>
    </>
  )
}