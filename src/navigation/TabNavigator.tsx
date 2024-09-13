// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// // import HomePage from '../screens/Home/Home';
// // const TabNav = createBottomTabNavigator();
// // const TabNavigator = () => {
// //   return (
// //     <NavigationContainer>
// //       <TabNav.Navigator>
// //         <TabNav.Screen name="Home" component={HomePage}/>
// //       </TabNav.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default TabNavigator;


// // import React from 'react';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// // import HomePage from '../screens/Home/Home';
// // import TransactionScreen from '../screens/transaction/Transaction';
// // import AddExpense from '../screens/addExpense/AddExpense';

// // const Tab = createBottomTabNavigator();

// // const TabNavigator = () => {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator initialRouteName="Home" >
// //         <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
// //         <Tab.Screen name="Transaction" component={TransactionScreen} options={{ headerShown: false }} />
// //         <Tab.Screen name="AddExpense" component={AddExpense} options={{ headerShown: false }}/>
// //         {/* <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} /> */}
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default TabNavigator;


// import React, { useState } from 'react';
// import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import HomePage from '../screens/Home/Home';
// import TransactionScreen from '../screens/transaction/Transaction';
// import AddExpense from '../screens/addExpense/AddExpense';

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [showAddOptions, setShowAddOptions] = useState(false);

//   const handleTabPress = (tab: string) => {
//     if (tab === 'Add') {
//       setShowAddOptions(!showAddOptions);
//     } else {
//       setActiveTab(tab);
//       setShowAddOptions(false);
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={() => (
//         <View style={styles.navBarContainer}>
//           <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Home')}>
//             <Image
//               source={require('../assets/icons/home.png')}
//               style={[styles.navIcon, activeTab === 'Home' && styles.navIconActive]}
//             />
//             <Text style={activeTab === 'Home' ? styles.navTextActive : styles.navText}>Home</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Transaction')}>
//             <Image
//               source={require('../assets/icons/Transaction.png')}
//               style={[styles.navIcon, activeTab === 'Transaction' && styles.navIconActive]}
//             />
//             <Text style={activeTab === 'Transaction' ? styles.navTextActive : styles.navText}>Transaction</Text>
//           </TouchableOpacity>

//           <View style={styles.addButtonWrapper}>
//             <TouchableOpacity style={styles.addButton} onPress={() => handleTabPress('Add')}>
//               <Image
//                 source={
//                   showAddOptions
//                     ? require('../assets/icons/close.png')
//                     : require('../assets/icons/add.png')
//                 }
//                 style={styles.addIcon}
//               />
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Budget')}>
//             <Image
//               source={require('../assets/icons/Pie-chart.png')}
//               style={[styles.navIcon, activeTab === 'Budget' && styles.navIconActive]}
//             />
//             <Text style={activeTab === 'Budget' ? styles.navTextActive : styles.navText}>Budget</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Profile')}>
//             <Image
//               source={require('../assets/icons/user.png')}
//               style={[styles.navIcon, activeTab === 'Profile' && styles.navIconActive]}
//             />
//             <Text style={activeTab === 'Profile' ? styles.navTextActive : styles.navText}>Profile</Text>
//           </TouchableOpacity>
//         </View>
//       )}>
//         <Tab.Screen name="Home" component={HomePage} />
//         <Tab.Screen name="Transaction" component={TransactionScreen} />
//         <Tab.Screen name="AddExpense" component={AddExpense} />
//         {/* Add more screens as needed */}
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   navBarContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     height: 80,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 10,
//     paddingHorizontal: 20,
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navIcon: {
//     tintColor: '#B0B0B0',
//   },
//   navIconActive: {
//     tintColor: '#7F3DFF',
//   },
//   navText: {
//     color: '#B0B0B0',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   navTextActive: {
//     color: '#7F3DFF',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   addButtonWrapper: {
//     position: 'relative',
//     top: -20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     zIndex: 10,
//   },
//   addButton: {
//     backgroundColor: '#7F3DFF',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   addIcon: {
//     tintColor: '#fff',
//   },
//   optionIcon: {
//     tintColor: '#fff',
//   },
// });

// export default TabNavigator;
