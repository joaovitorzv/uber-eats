import styled from 'styled-components';

export const Order = styled.div`
  margin: 10px;
  max-width: 270px;
  background-color: #fafafa;
  border: 1px solid #e6e6e6;
  
  .order-info {
    padding: 10px;

    h3 {
     span {
       color: #06C167;
     }
  
   }
  }

  .customer-info {
    padding: 10px;
    margin-top: 10px;
    background-color: #292828;
    color: white;

    p {
      margin-top: 5px;
      span {
        font-weight: bold;
      }
    }
  }

  .accept-btn {
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px 25px;
  color: black;

  &:hover {
    background-color: ${props => props.warning ? "#db1a3a" : "#06C167"};
    color: white;
  }

`;