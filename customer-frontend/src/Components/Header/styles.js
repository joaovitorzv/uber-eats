import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2px 40px;
  display: flex;  
  justify-content: space-between;
  position: fixed;
  background-color: white;
  border-bottom: 3px solid #f0f0f0;
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
`;

export const DeliverTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

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
`;

export const CustomerButton = styled.button`
  background-color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const ToggleMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ToggleMenu = styled.div`
  margin-top: 2%;
  display: ${props => props.toggleMenu};
  position: fixed;
  background-color: white;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.17);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.17);
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.17);

  ul {
    list-style: none;
    padding: 2px 0;
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500&display=swap');
    font-family: 'Hind Siliguri', sans-serif;
  }

  li {
    padding: 10px 60px 10px 20px;
    background-color: white;
    cursor: pointer;

    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
    }

    &:hover {
      background-color: #ebf0ed;
      transition-duration: 250ms;
    }
  }

  .option-icon {
    padding: 5px 7px;
    background-color: #ebf0ed;
    margin-right: 10px;
    border-radius: 40px;

    svg {
      margin: 0;
    }
  }
`;