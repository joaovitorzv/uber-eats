import React from 'react';

import Header from '../../components/Header';
import { Container } from './styles';

export default function CreateAccount() {
  return (
      <>
      <Header />
      <Container>
        <div className="home-container">
            <div className="item-container">
              <h2>Partner with Uber Eats and do more for your restaurant</h2>
            </div>
            <div className="item-container">
              <h2>form go here</h2>
            </div>
        </div>
      </Container>
      </>
  );
}