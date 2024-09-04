// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';
// import AuthFirebase from './src/components/firebase/AuthFirebase';
// import store from './src/store/store';
// import { Platform } from 'react-native';

// // const Stack = createStackNavigator();

// const App = () => {
//   useEffect(() => {
//     if(Platform.OS === 'android'){
//     SplashScreen.hide();
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       {/* <NavigationContainer>
//         <Stack.Navigator initialRouteName="Auth">
//           <Stack.Screen name="Auth" component={AuthFirebase}  />
//         </Stack.Navigator>
//       </NavigationContainer> */}
//       <AuthFirebase />
//     </Provider>
//   );
// };

// export default App;


// // App.tsx
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { Platform} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import store from './src/store/store';
// // import AppNavigator from './src/navigation/AppNavigator';
// import AuthFirebase from './src/components/firebase/AuthFirebase';

// const App = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       if (Platform.OS === 'android') {
//         SplashScreen.hide();
//       }
//     }, 900);
//   }, []);

//   return (
//     <Provider store={store}>
//     <AuthFirebase />
//     </Provider>
//   );
// };

// export default App;




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


// // App.tsx
// import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
// import { Platform } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import { NavigationContainer } from '@react-navigation/native';
// import store from './src/store/store';
// // import AuthFirebase from './src/components/firebase/AuthFirebase';
// import AppNavigator from './src/navigation/AppNavigator';

// const App = () => {
//   useEffect(() => {
//     setTimeout(() => {
//       if (Platform.OS === 'android') {
//         SplashScreen.hide();
//       }
//     }, 900);
//   }, []);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
