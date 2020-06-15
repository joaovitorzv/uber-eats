import styled from 'styled-components';

export const OrdersContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 1%;

border-bottom: 1px solid #e0e0e0;
`;

export const Order = styled.div`
display: flex;
justify-content: space-between;
`;

export const OrderDetails = styled.div`
display: flex;

.details {
  padding: 0 20px;
  
  h2 {
    font-size: 22px;
  }

  p {
    margin: 5px 0 20px 0;
    color: #5e5e5e;
    font-size: 14px;
  }
}


.items {
  display: flex;
  max-width: 560px;
}  
.quantity {
  padding: 4px 7px;
  border: 1px solid #c9c9c9;
}

.item-detail {
  line-height: 20px;
  padding: 5px 10px;

  h3 {
    font-weight: 400;
  }

  span {
    color: #06c167;
    margin: 0 10px;
    cursor: pointer;
    font-weight: bold;
  }
}
`;

export const RestaurantThumbnail = styled.div`
width: 330px;
height: 150px;

background: url(${props => `http://localhost:3333/files/${props.banner}`}) no-repeat center center;
background-size: cover;
overflow: hidden;
`;

export const OrderAgain = styled.div`
button {
  border: none;
  padding: 15px 100px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #06c167;
  cursor: pointer;

  &:hover {
    background-color: #04a759;
    transition-duration: 400ms;
  }
}
`;