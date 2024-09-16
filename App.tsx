import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      if (Platform.OS === 'android') {
        SplashScreen.hide();
      }
    }, 900);
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
