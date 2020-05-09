import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  max-width: 1250px;
}

`;

export const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

export const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Raleway:600&display=swap');
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: ${props => props.size || '16px'}

`;

export const SmallText = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #999999;
  font-size: 16px;
`;