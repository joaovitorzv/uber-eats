import React, { useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import {
  Container,
  Card,
  CardTitle,
  Input,
  LoginButton,
  CreateAccount,
  Text,
  TextButton
} from './styles';

import Logo from '../../assets/login-logo.png';

export default function Login({ navigation }) {

  return (
    <Container>
      <Image source={Logo} style={{ width: 100, height: 100, resizeMode: 'contain', marginTop: 30 }}/>
      
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <Card>
            <CardTitle>Login</CardTitle>
              <Input 
                placeholder="Email" 
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email} 
              />
              <Input 
                placeholder="Password" 
                secureTextEntry={true} 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
          </Card>

          <LoginButton onPress={() => handleSubmit()}>
            <TextButton>Login</TextButton>
          </LoginButton>
        </>
        )}
      </Formik>
      <CreateAccount onPress={() => navigation.navigate('Signup')}>
        <Text>Not have an Account?</Text>
      </CreateAccount>
    </Container>
  )
}