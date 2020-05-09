import styled from 'styled-components';

export const Container = styled.div`

`;

export const FilterContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;

`;

export const FilterButton = styled.div `
  border: none;
  background-color: ${props => props.isSelected ? 'black' : 'rgb(240, 240, 240)'};
  color: ${props => props.isSelected ? 'white' : 'black'};
  padding: 10px 15px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 14px;
  margin-right: 5px;
  border-radius: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }
`;

export const SubTitleItem = styled.div`
  padding: 20px 0; 
`;
