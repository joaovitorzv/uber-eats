import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);

  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket
      }}
    >
      {children}
    </BasketContext.Provider>
  )
}


export function useBasket() {
  const context = useContext(BasketContext);

  const { basket, setBasket } = context;

  return { basket, setBasket};
}

export const BasketConsumer = BasketContext.Consumer;