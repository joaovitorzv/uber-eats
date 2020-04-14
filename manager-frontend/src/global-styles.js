import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}


body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
  border: none;
  background-color:  #f2eded;
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  padding: 3% 4%;
  border-bottom: 2px solid transparent;

  &:focus {
    border-bottom: 2px solid rgb(67, 164, 34);
  }

  &:not(:first-child){
    margin-top: 3px;
  }
`;


export const Button = styled.button`
  width: 100%;
  background-color: rgb(67, 164, 34);
  color: white;
  border: none;
  padding: 3% 0;
  font-weight: 400;
  margin-top: 5px;

  &:hover {
    transition-duration: 400ms;
    background-color: rgb(50, 130, 30)
  }
`;

export const WhiteButton = styled.button`
  border: none;
  background-color: white;
  padding: 5px 15px;
  border: 2px transparent;

  &:hover {
    background-color: black;
    color: white;
    border: 2px solid #06C167;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  padding: 10px 20px;
  width: ${props => props.size};
  background-color: black;
  color: white;
  

  &:hover {
    background-color: #06C167;
    transition-duration: 200ms;
  }
`;

export const ErrorText = styled.p`
  border-top: 2px solid red;
  font-size: 10px;
  color: red;
`;

