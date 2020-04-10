import styled from 'styled-components';

export const Container = styled.div`
  position: fixed; 
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    width: 160px;
    height: 50px;
    display: flex;
    padding: 5px;
    align-items: center;
  }

`;