import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { Container, FormContainer, ItemContainer, InputBox } from './styles';
import { Button, Input, ErrorText } from '../../global-styles';

import api from '../../services/api';

const validationSchema = Yup.object().shape({
  restaurant_name: Yup.string().required("Restaurant name is required"),
  restaurant_address: Yup.string().required("Restaurant address is required"),
  restaurant_city: Yup.string().required("Restaurant city is required"),
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Put a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  culinary: Yup.string().required('Cuisine is required')
});

export default function CreateAccount({ history }) {
  const emailsAlreadyInUse = [];
  async function handleSubmit (values, {
    setSubmitting,
    setFieldError
  }) {
    try {
      await api.post('/signup', values);
      setSubmitting(false);
      history.push('/session')
    } 
    catch (err) {
      setFieldError('email', 'email already used');
      emailsAlreadyInUse.push(err.data);
      setSubmitting(false);
    }
  }

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

              <Formik
                initialValues={{ 
                  restaurant_address: "", 
                  restaurant_city: "",
                  restaurant_name: "",
                  name: "",
                  email: "",
                  password: "",
                  culinary: ""
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
                validate={
                  values => {
                    let errors = {};
                    if (emailsAlreadyInUse.includes(values.email)) {
                      errors.email = 'email is already in use';
                    }
                    return errors;
                  }
                }
              >
                {({ handleSubmit, handleChange, values, errors, touched, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <InputBox>
                    <Input 
                      type="text" 
                      placeholder="Restaurant Name"
                      name="restaurant_name"
                      onChange={handleChange}
                      values={values.restaurant_name}
                    />
                    {errors.restaurant_name && touched.restaurant_name && <ErrorText>{errors.restaurant_name}</ErrorText>}
                    <Input 
                      type="text" 
                      name="restaurant_address"
                      placeholder="Restaurant Address" 
                      onChange={handleChange}
                      values={values.restaurant_address}
                    />
                    {errors.restaurant_address && touched.restaurant_address && <ErrorText>{errors.restaurant_address}</ErrorText>}
                    <Input 
                      type="text" 
                      name="restaurant_city"
                      placeholder="Restaurant City" 
                      onChange={handleChange}
                      values={values.restaurant_city}
                    />
                    {errors.restaurant_city && touched.restaurant_city && <ErrorText>{errors.restaurant_city}</ErrorText>}
                  </InputBox>

                  <InputBox>
                    <Input 
                      type="text" 
                      name="name"
                      placeholder="Full Name"
                      onChange={handleChange}
                      values={values.name}
                    />
                    {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      values={values.email}
                    />
                    {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>} 
                    <Input 
                      type="password"
                      name="password" 
                      placeholder="Password"
                      onChange={handleChange}
                      values={values.password}
                    />
                    {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
                  </InputBox>

                  <InputBox>
                    <Input 
                      type="text" 
                      name="culinary"
                      placeholder="Type of cuisine"
                      onChange={handleChange}
                      values={values.culinary}
                    /> 
                    {errors.culinary && touched.culinary && <ErrorText>{errors.culinary}</ErrorText>}
                  </InputBox>

                  <Button type="submit" disabled={isSubmitting}>Submit</Button>
                  {isSubmitting && <Loading />}
                </form>
                )}
              </Formik>

            </FormContainer>
        </div>
      </Container>
      </>
  );
}