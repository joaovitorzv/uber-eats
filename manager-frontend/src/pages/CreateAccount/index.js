import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Header from '../../components/Header';
import { Container, FormContainer, ItemContainer, InputBox } from './styles';
import { Button, Input } from '../../global-styles';

import api from '../../services/api';

const validationSchema = Yup.object().shape({
  restaurantName: Yup.string().required("Restaurant name is required"),
  restaurantAddress: Yup.string().required("Restaurant address is required"),
  fullName: Yup.string().required('Name is required'),
  email: Yup.string().email('Put a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  cuisine: Yup.string().required('Cuisine is required')
});

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

              <Formik
                initialValues={{ 
                  restaurantAddress: "", 
                  restaurantName: "",
                  fullName: "",
                  email: "",
                  password: "",
                  cuisine: ""
                }}
                validationSchema={validationSchema}
                onSubmit={ async (values) => {
                  const response = await api.post('/signup', values);
                  return response;
                }}
              >
                {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <InputBox>
                    <Input 
                      type="text" 
                      placeholder="Restaurant Name"
                      name="restaurantName"
                      onChange={handleChange}
                      values={values.restaurantName}
                    />
                    {errors.restaurantName}
                    <Input 
                      type="text" 
                      name="restaurantAddress"
                      placeholder="Restaurant Address" 
                      onChange={handleChange}
                      values={values.restaurantAddress}
                    />
                    {errors.restaurantAddress}
                  </InputBox>

                  <InputBox>
                    <Input 
                      type="text" 
                      name="fullName"
                      placeholder="Full Name"
                      onChange={handleChange}
                      values={values.fullName}
                    />
                    {errors.fullName}
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      values={values.email}
                    />
                    {errors.email}
                    <Input 
                      type="password"
                      name="password" 
                      placeholder="Password"
                      onChange={handleChange}
                      values={values.password}
                    />
                    {errors.password}
                  </InputBox>

                  <InputBox>
                    <Input 
                      type="text" 
                      name="cuisine"
                      placeholder="Type of cuisine"
                      onChange={handleChange}
                      values={values.cuisine}
                    /> 
                    {errors.cuisine}
                  </InputBox>

                  <Button type="submit">Submit</Button>
                </form>
                )}
              </Formik>

            </FormContainer>
        </div>
      </Container>
      </>
  );
}