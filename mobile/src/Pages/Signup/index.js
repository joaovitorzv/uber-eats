import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {
  Header,
  BackLink,
  Text,
  Container, 
  Card,
  Input,
  LoginButton,
  CardTitle,
  TextButton
} from './styles';

export default function Login({ navigation }) {
  return (
    <>
    <Header>
      <BackLink onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={24} color="#000" />
        <Text>Back</Text>
      </BackLink>
    </Header>

    <Container>
      <Card>
        <CardTitle>Create Account</CardTitle>

        <Input placeholder="Name"/>
        <Input placeholder="Address"/>
        <Input placeholder="District"/>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry={true} />
      </Card>

      <LoginButton onPress={() => {}}>
        <TextButton>Create</TextButton>
      </LoginButton>
    </Container>
    </>
  )
}