import styled from 'styled-components';

export const TitleSection = styled.div`
  max-width: 1300px;
  margin: 2% auto;
`;

export const OrdersContainer = styled.div`
  max-width: 1300px;
  margin: 2% auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: #e7ebe6;
  .order-container {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: auto;
  }
`;

