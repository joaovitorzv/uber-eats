import React from 'react';
import Logo from '../../assets/uber-eats-logo.png';

import { Footer, Container } from './styles';
import { Button, Input } from '../../global-styles';

export default function Login() {
  return (
    <>
    <Container>
        <img  src={Logo} alt=""/>
        <div className="form-container">
          <h2>Welcome back</h2>
          <Input type="email" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button>Login</Button>
          <a href="/signup">Create an account</a>
        </div>  
    </Container>

    <Footer>
      <span>© 2020 Uber Technologies, Inc.</span>
      <span><a href="/session"> Privacy Policy</a> | <a href="/session">Terms of Use</a></span>
    </Footer>
    </>
  )
}