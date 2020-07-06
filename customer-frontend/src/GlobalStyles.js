import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

import { Link } from 'react-router-dom';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;

  :focus {outline:none;}
  ::-moz-focus-inner {border:0;}

  svg {
    margin-right: 5px;
  }
}

  
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SubTitleItem = styled.div`
  padding: 35px 0 20px 0; 

  h2 {
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500&display=swap');
    font-family: 'Hind Siliguri', sans-serif;
    font-weight: 400;
  }
`;


export const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap');
  font-family: 'Hind Siliguri', sans-serif;
  font-size: ${props => props.size || '16px'};
  color: black;
`;

export const SmallText = styled.h3`
  @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500&display=swap');
  font-family: 'Hind Siliguri', sans-serif;
  font-weight: 400;
  color: #999999;
  font-size: 16px;
`;

export const PrimaryLink = styled.a`
  color: #06c167;
  text-decoration: none;
  font-weight: bold;
`;

export const SecondaryLink = styled(Link)`
  color: #06c167;
  text-decoration: none;
  font-weight: bold;
`;

export const BlackButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500&display=swap');
  font-family: 'Hind Siliguri', sans-serif;
  background-color: black;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 14px;
  padding: 1% 0; 
  cursor: pointer;

  &:hover {
    background-color: #1c1c1c;
    transition-duration: 200ms;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: red;
`;