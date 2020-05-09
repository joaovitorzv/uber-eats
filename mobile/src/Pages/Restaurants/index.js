import * as React from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Logout } from './styles';

import { AuthContext } from '../../Routes';

import api from '../../services/api';

import Navigation from '../../Components/Navigation';

export default function Restaurants() {
  const [restaurants, setRestaurants] = React.useState('');

  async function loadRestaurants() {
    const response = await api.get('/restaurants', {
      headers: {
        authorization: await AsyncStorage.getItem('userToken')
      }
    });

    setRestaurants(response.data)
  }

  React.useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={restaurants}
        keyExtractor={restaurant => String(restaurant.id)}
        renderItem={({ item: restaurant }) => (
          <Text>Culinary: {restaurant.culinary}</Text>
        )}
      />

      <Navigation />
    </View>
  )
}