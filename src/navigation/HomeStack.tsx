import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: 'Cupi2',
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
