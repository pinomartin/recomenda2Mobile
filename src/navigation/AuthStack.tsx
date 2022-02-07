import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

export type AuthStackParam = {
    LoginScreen:undefined;
}

const Stack = createStackNavigator<AuthStackParam>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}