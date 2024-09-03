// // src/navigation/AppNavigator.tsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import SignInScreen from '../screens/signIn/SignInScreen';
// // Import other screens...

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn">
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;


// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthFirebase from '../components/firebase/AuthFirebase';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* Add AuthFirebase to the stack navigator */}
        <Stack.Screen name="Auth" component={AuthFirebase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
