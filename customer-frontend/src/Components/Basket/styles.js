import styled from 'styled-components';

export const BasketButton = styled.button`
  background-color: white;
  
  border: none;
  font-weight: bold;
  display: flex;
  position: fixed;
  align-items: center;
  cursor: pointer;
  right: 15px;
  top: 28px;

  p {
    font-size: 17px;
    color: #21a453;
  }
  
`;

export const Container = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  position: fixed;
  background-color: white;
  right: 40px;
  bottom: 0;
  width: 400px;
  padding: 1.5%;
  display: ${props => props.display};

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);

  .items-container {
    max-height: 380px;
    overflow-y: scroll;
    scrollbar-color: black white;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
    color: #858585;

    a {
      color: #21a453;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CloseButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;  
  margin-bottom: 20px;
`;

export const PaymentOrder = styled.button`
  margin-top: 10px;
  width: 100%;
  background-color: black;
  font-weight: bold;
  color: white;
  border: none;
  padding: 15px 0;

  cursor: pointer;
`;

export const BasketItem = styled.div`
  border-bottom: 1px solid #dbdbdb;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  
  h3 {
    font-weight: 400;

    button {
      border: none;
      background-color: white;
      color: #858585;
      margin-left: 5px;

      &:hover {
        color: black;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  span {
    color: #858585;
  }

`;