import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import _public from './public';
import _private from './private';
import _Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../src/redux';
import { _init } from '../../src/redux/Action';
import { METRIX } from '../../src/helpers';
import { useAuth } from '../context/auth';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  const { auth, setAuth }: any = useAuth()


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!auth
          ? _public()
          : _private()
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
