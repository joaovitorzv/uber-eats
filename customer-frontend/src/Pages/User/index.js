import React, { useEffect, useState } from 'react';

import Header from '../../Components/Header';
import PastOrder from '../../Components/PastOrder';

import {
  Container,
  Customer
} from './styles';

import api from '../../services/api';

export default function Orders() {
  const [customer, setCustomer] = useState({});
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/informations', {
        headers: {
          authorization: localStorage.getItem('authorization')
        }
      });

      setCustomer(response.data.customer);
      setOrders(response.data.pastOrders);
    }
    
    fetchData();
  }, []);
  
  return (
    <>
    <Header />
    <Container>

      <Customer id="profile">

        <div className="basic-section">
          <div className="user-picture"></div>
          <div>
            <h2>{customer.name}</h2>
            <p>{customer.email}</p>
          </div>
        </div>

        <div className="customer-info">
          <div className="modify-profile">
            <h3>To modify your profile, please visit:</h3>
            <a href="https://partners.uber.com" target="_blank" rel="noopener noreferrer">https://partners.uber.com</a>
          </div>

          <div className="info-container">
            <div>
              <label>Location</label>
              <h4>Brazil</h4>
            </div>

            <div>
              <label>Invite code</label>
              <h4>qieg9j</h4>
            </div>

            <div>
              <label>Address</label>
              <h4>{customer.address}</h4>
            </div>

            <div>
              <label>District</label>
              <h4>{customer.district}</h4>
            </div>
          </div>
        </div>
      </Customer>

      <div id="orders">
        <h2>Past orders</h2>

        {orders.map(order => (
          <PastOrder order={order} key={order.id} />
        ))}
      </div>
      
    </Container>
    </>
  )
}