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
`;
