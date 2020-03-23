import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 7% 0;
  min-height: 89vh;

  img {
    width: 200px;
    margin: 0 auto;
  }

  .form-container {
    h2 {
      margin: 10% 0 3% 0;
      font-weight: 400;
    }
  }
`;

export const Footer = styled.footer`
  background: #303030;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 2.5% 3%;
  font-size: 12px;
  margin: auto auto 0 auto;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;