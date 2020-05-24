import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { Container, FormContainer, Footer, Input, SubmitButton} from './styles';
import { SecondaryLink, ErrorText } from '../../GlobalStyles';

import Logo from '../../assets/ue_logo_horizontal.png';

import api from '../../services/api';
import { Login } from '../../utils/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Put a valid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

export default function Signup({ history }) {
  let invalidCredentials = false;
  async function handleSubmit(values, {
    setSubmitting,
    setFieldError
  }) {
    try {
      const response = await api.post('/session', values);
      Login(response.data.token, response.data.customer);
      setSubmitting(false);
      history.push('/');
    } catch(err) {
      setFieldError('password', 'Email or password is invalid');
      invalidCredentials = true;
      setSubmitting(false);
    }
  }

  return (
    <Container>
      <FormContainer>
        <div className="logo-container">
          <img src={Logo} alt="ue logo"/>
        </div>
          
        <h2>Welcome back</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validate={() => {
            let errors = {};
            if (invalidCredentials) {
              errors.password = 'Email or password is wrong';
              invalidCredentials = false;
            }
            return errors;
          }}
        >
          {({ handleChange, handleSubmit, handleBlur, touched, isSubmitting, values, errors,}) => (
          <form onSubmit={handleSubmit}>
            <Input 
              name="email"
              type="email" 
              placeholder="Email address"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
            <Input 
              name="password"
              type="password" 
              placeholder="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}

            <SubmitButton type="submit">
              {isSubmitting ? "Sending..." : "Login"}
            </SubmitButton>
          </form>
          )}
        </Formik>

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