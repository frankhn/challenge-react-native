import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';

import { COLORS } from '../../src/helpers';
import tailwind from 'tailwind-rn';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const headerConfig = {
  headerBackTitleVisible: false,
  title: '',
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerTintColor: COLORS.darkGray,
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideLeft,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default () => (
  <>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
        presentation: 'transparentModal',
        // headerMode: 'screen',
        // gestureEnabled: false

      }}
    />
  </>
);
