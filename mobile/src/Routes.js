import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Restaurants from './Pages/Restaurants';

import SplashScreen from './Components/SplashScreen'

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null); 

  if (!isLoading) {
    return <SplashScreen />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token == null ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <Stack.Screen name="Restaurants" component={Restaurants} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}