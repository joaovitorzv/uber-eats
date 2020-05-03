import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container, 
  Card,
  Input,
  LoginButton,
  CreateAccount,
  Text,
  TextButton
} from './styles';

export default function Login({ navigation }) {

  return (
    <Container>
      <Card>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
      </Card>

      <LoginButton onPress={() => {}}>
        <TextButton>Login</TextButton>
      </LoginButton>

      <CreateAccount onPress={() => navigation.navigate('Signup')}>
        <Text>Not have an Account?</Text>
      </CreateAccount>
    </Container>
  )
}