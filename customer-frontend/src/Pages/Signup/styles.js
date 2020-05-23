import styled from 'styled-components';

export const Container = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@500&display=swap');
  font-family: 'Mukta', sans-serif;
`;

export const FormContainer = styled.div`
  width: 600px;
  padding-bottom: 3%;
  margin: 0 auto;

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
  

  .logo-container {
    display: flex;
    justify-content: center;

    img {
      max-height: 80px;
    }
  }

  h2 {
    margin-bottom: 2%;
  }

  label {
    color: #444;
    font-size: 14px;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    .medium {
      width: 49%;

      input {
        width: 100%;
      }
    }

    .big {
      width: 73%;

    }

    .small {
      width: 25%;
    }
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
  padding: 12px;
  font-size: 16px;
  border: 1px solid #E0E0E0;
  width: 100%;
  margin-top: 5px;

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
  margin-top: 2%;
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
  padding: 1.4% 3%;
  font-size: 12px;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;