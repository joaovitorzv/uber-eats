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
        <Input placeholder="Name"/>
        <Input placeholder="Address"/>
        <Input placeholder="District"/>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
      </Card>

      <LoginButton onPress={() => {}}>
        <TextButton>Create</TextButton>
      </LoginButton>

      <CreateAccount onPress={() => navigation.navigate('Signup')}>
        <Text>Already have an account?</Text>
      </CreateAccount>
    </Container>
  )
}