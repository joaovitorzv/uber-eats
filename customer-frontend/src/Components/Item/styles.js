import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
  a {
    text-decoration: none;
  }
  
  p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 12px;
    color: #5e5e5e;
    padding-bottom: 10px;
  }

  .title-container {
    padding: 15px 0;
    border-bottom: 1px solid #cfcfcf; 
    margin-bottom: 10px;

    p {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: black;
      font-size: 14px;
      font-weight: 100;
      color: black;
    }
  } 
`;

export const Thumbnail = styled.div`
  overflow: hidden;
  height: 270px;
  width: 400px;
  border: none;
  background-color: white;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Favorite = styled.div``; 