import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2px 40px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const LocationOptions = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
`;
export const LocationInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  svg {
    margin-right: 5px;
  }
`;

export const DeliverTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  
  svg {
    margin-right: 5px;
  }
`;

export const SearchOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.button`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  margin-right: 40px;

  svg {
    margin-right: 5px;
  }
`;

export const BasketButton = styled.button`
  background-color: white;
  border: none;
  margin-left: 30px;
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