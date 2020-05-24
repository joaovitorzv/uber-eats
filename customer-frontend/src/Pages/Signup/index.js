import React from 'react';

import * as Yup from 'yup';
import { Formik } from 'formik';

import { Container, FormContainer, Footer, Input, SubmitButton} from './styles';
import { SecondaryLink, ErrorText } from '../../GlobalStyles';

import Logo from '../../assets/ue_logo_horizontal.png';

import api from '../../services/api';
//import { Login } from '../../utils/auth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Type a valid email').required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
  address: Yup.string().required('Address is required'),
  address_number: Yup.string().required('Number is required'),
  district: Yup.string().required('District is required'),
  city: Yup.string().required('City is required')

})

export default function Signup({ history }) {
  const emailsAlreadyInUse = [];

  async function handleSubmit(values, {
    setSubmitting,
    setFieldError
  }) {
    try {
      await api.post('/signup', values) 
      setSubmitting(false)
      history.push('/login');
    } catch(err) {
      setFieldError('email', 'email already used');
      emailsAlreadyInUse.push(err.data);
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
          initialValues={{
            name: "",
            email: "",
            password: "",
            address: "",
            address_number: "",
            city: "",
            district: ""
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validade={
            values => {
              let errors = {};
              if (emailsAlreadyInUse.includes[values.email]) {
                errors.email = 'email is already in use'
              }
              return errors;
            }
          }
        >
        {({ handleSubmit, handleChange, values, touched, isSubmitting, errors, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Input 
              name="name"
              type="text"   
              placeholder="Full name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
            
            <Input 
              name="email"
              type="email"  
              placeholder="Email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
            
            <Input 
              name="password"
              type="password" 
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}

            <div className="input-group">
              <div className="big">
                <Input 
                  name="address"
                  type="text" 
                  placeholder="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                {errors.address && touched.address && <ErrorText>{errors.address}</ErrorText>}
              </div>

              <div className="small">
                <Input 
                  name="address_number"
                  type="number" 
                  placeholder="Number" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address_number}
                />
                {errors.address_number && touched.address_number && <ErrorText>{errors.address_number}</ErrorText>}
              </div>
            </div>

            <div className="input-group">
              <div className="medium">
                <Input 
                  name="city"
                  type="text" 
                  placeholder="City" 
                  className="medium"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                {errors.city && touched.city && <ErrorText>{errors.city}</ErrorText>}
              </div>

              <div className="medium">
                
                <Input 
                  name="district"
                  type="text" 
                  placeholder="District" 
                  className="medium"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.district}
                />
                {errors.district && touched.district && <ErrorText>{errors.district}</ErrorText>}
              </div>
            </div>

            <SubmitButton type="submit">
              {isSubmitting ? "Creating account..." : "Submit"}
            </SubmitButton>
          </form>
        )} 
        </Formik>

        <div className="new-user">
          <p>Already a uber user? <SecondaryLink to="/login">Login</SecondaryLink></p>
        </div>
      </FormContainer>

      <Footer>
        <span>© 2020 by <a target="_blank" rel="noopener noreferrer" href="https://github.com/joaovitorzv">João vitor oliveira</a></span>

        <span>
            <a href="/signup">This site has no official relationship with uber, and was made for study purposes only </a> |  
            <a target="_blank" rel="noopener noreferrer" href="https://www.ubereats.com/restaurant/en-BR/signup"> Uber oficial site</a>
        </span>
      </Footer>
    </Container>
  )
}