import styled from 'styled-components';

export const OrdersContainer = styled.div`
  max-width: 1300px;
  margin: 2% auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .order-container {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: auto;

   border: 1px solid red;
  }
`;

