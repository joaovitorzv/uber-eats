import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  .home-container {
    background-image: url("https://www.ubereats.com/restaurant/_static/cd6de13bd5f5f13312b5f9571522aef4.jpg");
    color: white;
    padding: 0 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const ItemContainer = styled.div`
  padding: 13% 3%;
  max-width: 550px;
  h2 {
    font-size: 3em;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  color: black;
  width: 700px;
  font-weight: bold;
  font-size: .9em;
  padding: 5% 4%;

  h2 {
    padding-bottom: 25px;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 2%;
  color: #c7c7c7;

  label {
    color: rgb(67, 164, 34);
    font-weight: 400;
  }
`;
