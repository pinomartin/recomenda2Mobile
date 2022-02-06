import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import SwipeScreen from '../screens/SwipeScreen';
import LoginScreen from '../screens/LoginScreen';
import ThemeViewScreen from '../screens/developmentScreens/ThemeViewScreen';
import {useAuth} from '../firebase/auth';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
  SwipeScreen: undefined;
  LoginScreen: undefined;
  ThemeColorsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const user = useAuth();

  console.log(user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
      // initialRouteName="ThemeColorsScreen"
      initialRouteName={user ? 'HomeScreen' : 'LoginScreen'}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      {/*Development Screens*/}
      <Stack.Screen name="ThemeColorsScreen" component={ThemeViewScreen} />
    </Stack.Navigator>
  );
};
