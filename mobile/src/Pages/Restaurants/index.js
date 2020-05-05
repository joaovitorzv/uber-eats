import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Logout } from './styles';

import { AuthContext } from '../../Routes';

export default function Login() {

  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Restaurants</Text>

      <Logout onPress={() => signOut()}>
        <Text>Logout</Text>
      </Logout>
    </View>
  )
}