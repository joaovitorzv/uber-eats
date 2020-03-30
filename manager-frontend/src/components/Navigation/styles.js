import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  background-color: white;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }
`;

export const ButtonLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;

  li {
    color: #bfbfbf;
    display: flex;
    padding: 10px 20px;
    border: none;
    border-bottom: 3px solid white;

    &:hover {
      border: none;
      border-bottom: 3px solid #06C167;
      color: #06C167;
      background-color: #F7F2F2;
    }
  }
`;

export const UserLogged = styled.div`
  

  h2 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 1.2em;

    svg {
      margin-right: 10px;
    }
  }
`;