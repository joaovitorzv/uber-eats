import React from 'react';

import Header from '../../components/Header';
import { Container, FormContainer, ItemContainer, InputBox } from './styles';
import { Button, Input } from '../../global-styles';

export default function CreateAccount() {
  return (
      <>
      <Header />
      <Container>
        <div className="home-container">
            <ItemContainer>
              <h2>Partner with Uber Eats and do more for your restaurant</h2>
              <p>Uber Eats is a technology platform helping businesses worldwide expand their reach, delight customers, and boost their bottom line. Partner with us today</p>
            </ItemContainer>


            <FormContainer className="item-container  form-container">
              <h2>Partner with us</h2>
              <InputBox>
                <Input type="text" placeholder="Restaurant Name"></Input>
                <Input type="text" placeholder="Restaurant Address"></Input>
              </InputBox>

              <InputBox>
                <Input type="text" placeholder="Full Name"></Input>
                <Input type="email" placeholder="Email"></Input>
                <Input type="password" placeholder="Password"></Input>
              </InputBox>

              <InputBox>
                <Input type="text" placeholder="Type of cuisine"></Input> 
              </InputBox>

              <Button type="submit">Submit</Button>
            </FormContainer>
        </div>
      </Container>
      </>
  );
}