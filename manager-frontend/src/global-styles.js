import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato:400,900&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}


body {
  font-family: 'Lato', sans-serif;
  background-color: #f8f8f9;
}

button {
  cursor: pointer;
}

a {
  color: rgb(67, 164, 34);
}

`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #c7c7c7;
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  padding: 3% 4%;

  &:focus {
    border: 1px solid rgb(67, 164, 34);
  }
`;


export const Button = styled.button`
  width: 100%;
  background-color: rgb(67, 164, 34);
  color: white;
  border: none;
  padding: 3% 0;
  font-weight: 400;

  &:hover {
    transition-duration: 400ms;
    background-color: rgb(50, 130, 30)
  }
`;
