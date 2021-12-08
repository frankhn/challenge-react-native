import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Getstarted from '../screens/Getstarted';
import { COLORS } from '../helpers';
const Stack = createStackNavigator();

const header = {
  headerStyle: {
    backgroundColor: COLORS.primary,
    shadowColor: 'transparent',
    elevation: 0
  },
  headerBackTitleVisible: false,
  headerBackTitleStyle: {
    color: COLORS.white
  },
}

export default () => (
  <>
    <Stack.Screen
      name="Home"
      component={Getstarted}
      options={{
        headerShown: false,
        presentation: 'transparentModal',
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: true,
        headerTitleStyle: {
          color: COLORS.white,
        },
        presentation: 'transparentModal',
        ...header,
      }}
    />
  </>
);
