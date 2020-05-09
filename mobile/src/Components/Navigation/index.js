import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { View, PageButton } from './styles';

export default function Navigation() {
  const navigation = useNavigation();

  return (
    <View>
      <PageButton>
        <Icon name="home" size={20} color="#000" />
      </PageButton>

      <PageButton>
        <Icon name="search" size={20} color="#dbdbdb" />
      </PageButton>

      <PageButton>
        <Icon name="receipt" size={20} color="#dbdbdb" />
      </PageButton>

      <PageButton onPress={() => navigation.navigate('Customer')}>
        <Icon name="person" size={20} color="#dbdbdb" />
      </PageButton>
    </View>
  )
}