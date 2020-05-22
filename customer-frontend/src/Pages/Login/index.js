import React from 'react';


import { Container, FormContainer, Footer, Input, SubmitButton} from './styles';
import { SecondaryLink } from '../../GlobalStyles';

import Logo from '../../assets/ue_logo_horizontal.png';

export default function Signup() {
  return (
    <Container>
      <FormContainer>
        <div className="logo-container">
          <img src={Logo} alt="ue logo"/>
        </div>
          
        <h2>Welcome back</h2>
  
        <Input type="email" placeholder="Email address"/>
        <Input type="password" placeholder="Password"/>

        <SubmitButton type="submit">
          Login
        </SubmitButton>

        <div className="new-user">
          <p>New to uber? <SecondaryLink to="/signup">Create an account</SecondaryLink></p>
        </div>
      </FormContainer>

      <Footer>
        <span>© 2020 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/joaovitorzv">João vitor oliveira</a></span>

        <span>
            <a href="/login">This site has no official relationship with uber, and was made for study purposes only </a> |  
            <a target="_blank" rel="noopener noreferrer" href="https://www.ubereats.com/restaurant/en-BR/signup"> Uber oficial site</a>
        </span>
      </Footer>
    </Container>
  )
}