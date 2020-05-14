import styled from 'styled-components';

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