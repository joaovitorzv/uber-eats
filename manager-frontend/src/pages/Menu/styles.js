import styled from 'styled-components';

export const MenuContainer = styled.div`
  max-width: 1300px;
  margin: 2% auto;
  
  .settings-container {

    h2 {
      color: rgb(67, 164, 34);
    }
  
    .form-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .about-manager  {
      display: flex;
      background-color: white;
      padding: 20px;
      margin: .5% 0 3% 0;

      p {
        margin-left: 10px;
        font-weight: bold;
        color: #5e5e5e;
      }

      strong {
        color: rgb(67, 164, 34);
      }
    }
  }

  .form-container {
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 20px;
    
    .input-group {
      justify-content: center;
      display: flex;
      flex-direction: column;

      &:not(:first-child) {
          margin-top: 15px;
      }

      label {
        color: #8f8f8f;
        &:not(first-child) {
          margin-top: 10px;
        }
      }

      input {
        width: 600px;
        border: 2px solid transparent;
        background-color: #faf5f5;
        padding: 15px 20px;
        font-size: .9em;

        &:focus {
          border-bottom: 2px solid black;
        }
      }

      h3 {
        font-weight: bold;
        font-size: 16px;
      }
      
      .file-input-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        label {
          display: flex;
          flex-direction: column;
        }
        
        input {
          max-width: 295px;
          padding: 10px;
        }
      }

    }
  }

  .menu-items {
    padding-top: 20px;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
  }
`;

export const AlertFill = styled.p`
  padding: 4px 20px;
  background-color: ${props => props.filled ? "#06C167" : "red"};
  color: white;
`;