import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);
  const [showBasket, setShowBasket] = useState('none');
  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        showBasket,
        setShowBasket
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}


export function useBasket() {
  const context = useContext(BasketContext);

  const { basket, setBasket } = context;
  const { showBasket, setShowBasket } = context;

  return { basket, setBasket, showBasket, setShowBasket };
}

export const BasketConsumer = BasketContext.Consumer;