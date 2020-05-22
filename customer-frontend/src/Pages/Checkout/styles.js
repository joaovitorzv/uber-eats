import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1250px;

  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;500&display=swap');
  font-family: 'Mukta', sans-serif;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1%;

  h2 {
    font-weight: 400;
    font-size: 24px;
    padding-bottom: 3% ;
    border-bottom: 1px solid #ffe0e0;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
  }

  p {
    font-size: 14px;
    color: #646464
  }
`;


export const Delivery = styled.div`
  width: 600px;

  .address {
    padding: 3% 0;
    

    button {
      border: none;
      background-color: white;
      font-size: 14px; 
      color:  #06c167;
      font-weight: 600;
      cursor: pointer;
    }


    .details {
      margin-bottom: 4%;
    }
  }

  .payment {
    padding: 2% 0;
    display: flex;
    align-items: center;

    img {
      height: 20px;
      margin-right: 10px;
    }
  }
`;

export const Order = styled.div`
  width: 500px;

  .order-detail {
    display: flex;
    align-items: center;
    padding: .5% 0; 
    
    svg {
      margin-right: 5px;
    }

    h3 {
      margin: 5px;
    }
  }

  .receipt {
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    padding: 2% 0;
    margin: 1% 0;

    span {
      color: #06c167;
      font-weight: bold;
    }

    .receipt-item {
      display: flex;
      justify-content: space-between;
    }

    .fees {
      margin: 1% 0;
      
      h3 {
        margin-bottom: 2%;
        color: #434343;
      }
    }

    .total {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h3 {
        font-weight: 600;
        font-size: 18px;
        color: black;
      }
    }
  }
`;

export const PlaceOrder = styled.button`
  background-color: #06c167;
  color: white;
  border: none;
  padding: 4%;
  width: 100%;
  font-size: 16px;
  margin-top: 3%;
  cursor: pointer;

  &:hover {
    background-color: #04a759;
    transition-duration: 300ms;
  }
`;

export const ClearBasket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;


  p {
    margin-bottom: 5%;
  }

`;