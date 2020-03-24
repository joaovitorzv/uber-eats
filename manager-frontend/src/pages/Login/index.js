import React, { useState } from 'react';
import Logo from '../../assets/uber-eats-logo.png';

import { Footer, Container } from './styles';
import { Button, Input } from '../../global-styles';

import { signIn, isAuthenticated } from '../../utils/auth';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password}
    signIn(password);
    console.log(user);

    console.log(isAuthenticated());
  }

  return (
    <>
    <Container>
        <img  src={Logo} alt=""/>
        <div className="form-container">
          <h2>Welcome back</h2>
          <form onSubmit={handleSubmit}>
          <Input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button type="submit">Login</Button>
          </form>
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