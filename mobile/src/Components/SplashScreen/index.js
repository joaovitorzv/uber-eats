import React from 'react';

import { View, Image } from 'react-native';

import Logo from '../../assets/ubereats-logo.png';

export default function SplashScreen() {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={Logo} style={{ flex: 1, width: 200, height: 200, resizeMode: 'contain' }} />
    </View>
  )
}