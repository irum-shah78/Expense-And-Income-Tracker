import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import DetailTransactionScreen from '../screens/detailTransaction/DetailTransaction';
import UpdateProfileScreen from '../screens/updateProfile/UpdateProfile';
import ResetPasswordScreen from '../screens/resetPassword/ResetPassword';
import AuthFirebase from '../components/firebase/AuthFirebase';
import SignInScreen from '../screens/signIn/SignIn';
import SignUpScreen from '../screens/signUp/SignUp';
import ForgotPasswordScreen from '../screens/forgetPassword/ForgetPassword';
import AddExpense from '../screens/addExpense/AddExpense';
import AddIncome from '../screens/addIncome/AddIncome';
import FinancialReportScreen from '../screens/financialReport/FinancialReport';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthFirebase} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpense} options={{ headerShown: false }} />
        <Stack.Screen name="AddIncome" component={AddIncome} options={{ headerShown: false }} />
        <Stack.Screen name="FinancialReportScreen" component={FinancialReportScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailTransactionScreen" component={DetailTransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
