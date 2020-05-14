import React from 'react';

import { BasketItem } from './styles';

export default function BasketItems({ itemData }) {
  function removeItem(itemId, itemData) {
    console.log('remove this item', itemData.id, itemId)
  }

  return (
    <BasketItem>
      <h3 className="item-name">
        <span>{itemData.quantity} x</span> 
        {itemData.name}
        <button onClick={() => removeItem(itemData.id, itemData)}>Remove</button>
      </h3>
      <h3 className="item-price">R${itemData.price}</h3>
  </BasketItem> 
  )
}