import styled from 'styled-components';

import ThumbnailPic from '../../assets/thumbnail.jpeg';

export const Container = styled.div`
  border: ${props => props.haveOnBasket ? '2px solid #21a453' : '1px solid #dedede'};
  display: flex;
  justify-content: flex-start;

  &:hover {
    border: ${props => props.haveOnBasket ? '2px solid black' : '1px solid black'};
    cursor: pointer;
    transition-duration: 400ms;
  }
`;

export const Description = styled.div`
  width: 240px;
  padding: 15px;
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;

  h2 {
    font-weight: 400;
    font-size: 16px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    margin-bottom: 5px;
  }


  .price {
    padding-top: 20px;
  }

  p {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    font-size: 14px;
    color: #6e6e6e;
  }
`;

export const Thumbnail = styled.div`
  width: 170px;
  height: 150px;

  background: url(${ThumbnailPic}) no-repeat center center;
  background-size: cover;

  display: flex;
  justify-content: flex-end;
`;


export const BasketQuantity = styled.div `
  display: ${props => props.haveOnBasket ? 'flex' : 'none'};
  height: 30px;
  padding: 2px 10px;
  background-color: #21a453;
  color: white;

  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
`;