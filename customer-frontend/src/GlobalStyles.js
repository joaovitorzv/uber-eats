import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;

  :focus {outline:none;}
  ::-moz-focus-inner {border:0;}
}

`;

export const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

export const SubTitleItem = styled.div`
  padding: 35px 0 20px 0; 

  h2 {
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
`;


export const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Raleway:600&display=swap');
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: ${props => props.size || '16px'};
  color: black;

  svg {
    margin-right: 10px;
  }
`;

export const SmallText = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #999999;
  font-size: 16px;
`;

export const PrimaryLink = styled.a`
  color: #06c167;
  text-decoration: none;
  font-weight: bold;
`;