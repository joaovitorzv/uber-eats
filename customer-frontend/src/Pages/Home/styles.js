import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1250px;
`;

export const Filter = styled.div`
`;

export const FilterContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;

`;

export const FilterButton = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: none;
  background-color: ${props => props.isSelected ? 'black' : 'rgb(240, 240, 240)'};
  color: ${props => props.isSelected ? 'white' : 'black'};
  padding: 10px 15px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
  margin-right: 5px;
  border-radius: 50px;
  cursor: pointer;
`;

export const RestaurantsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 15px;
  row-gap: 35px;
`;
