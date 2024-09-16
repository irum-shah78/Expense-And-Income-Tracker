import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthFirebase from '../components/firebase/AuthFirebase';
import SignInScreen from '../screens/signIn/SignIn';
import SignUpScreen from '../screens/signUp/SignUp';
import ForgotPasswordScreen from '../screens/forgetPassword/ForgetPassword';
import HomePage from '../screens/Home/Home';
import AddExpense from '../screens/addExpense/AddExpense';
import AddIncome from '../screens/addIncome/AddIncome';
import TransactionScreen from '../screens/transaction/Transaction';
import FinancialReportScreen from '../screens/financialReport/FinancialReport';
import ProfileScreen from '../screens/profile/Profile';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthFirebase} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpense} options={{ headerShown: false }} />
        <Stack.Screen name="AddIncome" component={AddIncome} options={{ headerShown: false }} />
        <Stack.Screen name="Transaction" component={TransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FinancalReport" component={FinancialReportScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
