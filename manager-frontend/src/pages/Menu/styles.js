import styled from 'styled-components';

export const MenuContainer = styled.div`
  max-width: 1300px;
  margin: 2% auto;
  
  .settings-container {
  }

  .form-container {
    background-color: white;
    margin-top: 10px;
    padding: 10px;
    
    .input-group {
      justify-content: center;

      &:not(:first-child) {
        margin-top: 15px;
      }

      input {
        width: 30%;
        border: none;
        background-color: #f2eded;
        padding: 15px 20px;
        font-size: .9em;

        &:not(first-child) {
          margin-left: 10px;
        }
      }


      h3 {
        font-weight: 400;
        font-size: 15px;
        margin-left: 10px;
      }

      .file-input {
        padding: 12px;
        cursor: pointer;
        border: 2px solid #e6e9ed;
        margin: 0 10px;

        &:hover {
          color: #06C167;
          border: 2px solid #06C167;
        }
      }

      input[type="file"] {
        z-index: -1;
        position: absolute;
        opacity: 0;
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