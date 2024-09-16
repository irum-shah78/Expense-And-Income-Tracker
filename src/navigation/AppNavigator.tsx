import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AddExpense from '../screens/addExpense/AddExpense';
import AddIncome from '../screens/addIncome/AddIncome';
import FinancialReportScreen from '../screens/financialReport/FinancialReport';
import DetailTransactionScreen from '../screens/detailTransaction/DetailTransaction';
import UpdateProfileScreen from '../screens/updateProfile/UpdateProfile';
import ResetPasswordScreen from '../screens/resetPassword/ResetPassword';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="AddExpense" component={AddExpense} options={{ headerShown: false }} />
        <Stack.Screen name="AddIncome" component={AddIncome} options={{ headerShown: false }} />
        <Stack.Screen name="FinancialReportScreen" component={FinancialReportScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailTransactionScreen" component={DetailTransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
