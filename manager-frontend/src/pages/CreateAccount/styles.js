import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  .home-container {
    background-image: url("https://www.ubereats.com/restaurant/_static/cd6de13bd5f5f13312b5f9571522aef4.jpg");
    color: white;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .item-container {
      border: 1px solid red;
      padding: 4%;
      max-width: 450px;
    }
  }
`;