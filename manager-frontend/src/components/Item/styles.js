import styled from 'styled-components';

export const ItemContainer = styled.button`
  background-color: white;
  border: 1px solid #e3e3e3;
  width: 390px;
  height: 140px;
  display: grid;
  grid-template-columns: 2fr 1.4fr;

  &:hover {
    border-color: rgb(0, 0, 0);
    transition-duration: 300ms;
  }

  .text-container {
    padding: 4%;
    text-align: start;
    display: grid;
    grid-auto-rows: 4fr 1fr;
    
  }

  .text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');
    font-family: 'Fira sans', sans-serif;

    h3 {
      font-size: 1.3em;
      font-weight: 400;
      -webkit-line-clamp: 1;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      margin-bottom: 5px;
    }
  }

  .price {
    font-size: 1.2em;
  }

  .thumbnail {
    overflow: hidden;

    img {
      height: 100%;
    }
  }
`;

export const Modal = styled.div`
  display: none; 
  position: fixed; 
  z-index: 5;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
  }

  .close {
    color: #aaaa;
    font-size: 28px;
    font-weight: bold;

    &:hover, &:focus {
      color: #000;
      cursor: pointer;
    }
  }
`;