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
        font-weight: bold;
        font-size: 13px;
        padding: 15px;
        cursor: pointer;
        color: #7d7d7d;
        background-color: #f2eded;
        border: 1px solid transparent;
        margin: 0 10px;

        &:hover {
          color: white;
          background-color: #06C167;
        }
      }

      input[type="file"] {
        z-index: -1;
        display: none;
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

export const AlignBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
