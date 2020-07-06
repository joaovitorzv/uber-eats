import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(46,46,46); 
  background-color: rgba(46,46,46,0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 5;
  padding-top: 10%;
  top: 0;
  left: 0;

  #content {
    padding: 20px;
    background-color: white;
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  p {
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
    font-family: 'Raleway', sans-serif;
    color: #333333; 
  }

  #close-btn {
    margin-bottom: 1%;
    border: none;
    background-color: white;
    cursor: pointer;
  }

  #accept-btn {
    font-size: 16px;
    margin-top: 10%;
    height: 50px;
  }
`;