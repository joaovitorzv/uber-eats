import * as React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import {
  Header,
  BackLink,
  Text
} from './styles';

export default function HeaderBack({ navigate }) {
  return (
    <Header>
      <BackLink onPress={() => navigate.goBack()}>
        <Icon name="chevron-left" size={24} color="#000" />
        <Text>Back</Text>
      </BackLink>
  </Header>
  )
}