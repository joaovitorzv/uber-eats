import styled from 'styled-components';

export const Container = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap');
  font-family: 'Mukta', sans-serif;
`;

export const FormContainer = styled.div`
  width: 600px;
  padding-bottom: 3%;
  margin: 3% auto;

  .logo-container {
    display: flex;
    justify-content: center;

    img {
      max-height: 80px;
    }
  }

  h2 {
    margin-bottom: 4%;
  }

  label {
    color: #444;
    font-size: 14px;
  }
  
  .new-user {
    p {
      color: #444;
      a {
        color: #04a759;
        text-decoration: none;
      
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

`;

export const Input = styled.input`
  border: none;
  background-color: white;
  padding: 2%;
  font-size: 16px;
  border: 1px solid #E0E0E0;
  width: 100%;
  margin-top: 1.5%;

  &:focus {
    border: 1px solid black;
    transition-duration: 500ms;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  width: 100%;
  color: white;
  background-color: #06c167;
  font-weight: bold;
  padding: 2.5% 0;
  margin-top: 5%;
  cursor: pointer;

  &:hover {
    background-color: #04a759;
    transition-duration: 400ms;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;

  background: #303030;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 2.5% 3%;
  font-size: 12px;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;