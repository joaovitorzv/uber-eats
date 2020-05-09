import * as React from 'react';
import { Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Card,
  CardTitle,
  Input,
  LoginButton,
  CreateAccount,
  Text,
  TextButton,
} from './styles';

import { ErrorText } from '../../globalStyles';

import Logo from '../../assets/login-logo.png';

import { AuthContext } from '../../Routes';
import api from '../../services/api';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Put a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function Login({ navigation }) {

  const { login } = React.useContext(AuthContext);

  async function handleSubmit(values, {
    setSubmitting,
    setFieldError
  }) {
    try {
      const response = await api.post('/session', values);
      await AsyncStorage.setItem('userToken', response.data.token);
      setSubmitting(false)
      login({ token: response.data.token });
    } catch(err) {
      setSubmitting(false)
      setFieldError('password', 'Verify your credentials')
      console.log(err.message)
    }
  }

  return (
    <Container>
      <Image source={Logo} style={{ width: 100, height: 100, resizeMode: 'contain', marginTop: 30 }}/>
      
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
      {({ handleChange, handleBlur, handleSubmit, touched, errors, values, isSubmitting }) => (
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
              {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
              <Input 
                placeholder="Password" 
                secureTextEntry={true} 
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && touched.password && <ErrorText>{errors.password}</ErrorText>}
          </Card>

          <LoginButton onPress={() => handleSubmit()} disabled={isSubmitting}>
            <TextButton>{isSubmitting ? 'Sending...' : 'Login'}</TextButton>
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