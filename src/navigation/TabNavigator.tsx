import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text,} from 'react-native';

// Import your screen components
import HomePage from '../screens/Home/Home'; 
import TransactionPage from '../screens/transaction/Transaction';
// import BudgetPage from '../screens/BudgetPage';
// import ProfilePage from '../screens/ProfilePage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused ? require('../../assets/icons/home-on.png') : require('../../assets/icons/home.png');
              break;
            case 'Transaction':
              iconName = focused ? require('../../assets/icons/Transaction-on.png') : require('../../assets/icons/Transaction.png');
              break;
            case 'Budget':
              iconName = focused ? require('../../assets/icons/Pie-chart-on.png') : require('../../assets/icons/Pie-chart.png');
              break;
            case 'Profile':
              iconName = focused ? require('../../assets/icons/user-on.png') : require('../../assets/icons/user.png');
              break;
            default:
              break;
          }
          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'Home':
              label = 'Home';
              break;
            case 'Transaction':
              label = 'Transaction';
              break;
            case 'Budget':
              label = 'Budget';
              break;
            case 'Profile':
              label = 'Profile';
              break;
            default:
              break;
          }
          return <Text style={{ color: focused ? '#673ab7' : '#222' }}>{label}</Text>;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Transaction" component={TransactionPage} />
      {/* <Tab.Screen name="Budget" component={BudgetPage} />
      <Tab.Screen name="Profile" component={ProfilePage} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
