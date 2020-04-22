import styled from 'styled-components';

export const NewItems = styled.form`
  background-color: white;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 2% 10%;

  label {
    margin-top: 10px;
  }

  input { 
    border: 2px solid transparent;
    background-color: #faf5f5;
    padding: 15px 20px;
    font-size: .9em;

    &:focus {
      border-bottom: 2px solid black;
    }
  }

  .file-input {
    input[type="file"] {
      background-color: transparent;
    }
  }
`;
