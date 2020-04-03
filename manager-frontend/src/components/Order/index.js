import React from 'react';

import { Order, Button } from './styles';

export default function OrderCard( props ) {
  return (
    <Order>
      <div className="order-info">
        <h3><span>{props.quantity}x </span>{props.itemName}</h3>
        <p>{props.preferences}</p>
      </div>

      <div className="customer-info">
        <p><span>Address: </span>{props.address}</p>
        <p><span>District: </span>{props.district}</p>
        <p><span>To: </span>{props.customer}</p>
      </div>

      <div className="accept-btn">
        <Button warning>Refuse</Button>
        <Button>Accept</Button>
      </div>
    </Order>
  )
}

