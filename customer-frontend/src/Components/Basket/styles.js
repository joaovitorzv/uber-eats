import styled from 'styled-components';

export const BasketButton = styled.button`
  background-color: white;
  margin-right: 40px;
  border: none;
  :focus {outline:none;}
  ::-moz-focus-inner {border:0;}
  display: flex;
  align-items: center;
  cursor: pointer;

  
  p {
    font-size: 17px;
    color: #21a453;
  }
  
  svg {
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  position: fixed;
  background-color: white;
  right: 40px;
  top: 13%;
  width: 400px;
  padding: 1.5%;
  display: ${props => props.display};

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.10);
`;

export const CloseButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;  
  margin-bottom: 20px;
`;

