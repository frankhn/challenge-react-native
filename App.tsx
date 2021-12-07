import 'react-native-gesture-handler';
import React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store from './src/redux'
import MainNavigator from './src/navigation/navigation';
import { AuthContextProvider } from './src/context/auth';

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <AuthContextProvider>
          <SafeAreaProvider>
            <MainNavigator />
          </SafeAreaProvider>
        </AuthContextProvider>
      </ToastProvider>
    </Provider>
  )
}
export default App;
