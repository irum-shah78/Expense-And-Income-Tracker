import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/Home/Home';
import TransactionScreen from '../screens/transaction/Transaction';
import ProfileScreen from '../screens/profile/Profile';
// import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabNavigator = (props:any) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [showAddOptions, setShowAddOptions] = useState(false);
  // const navigation = useNavigation();

  const handleTabPress = (tab: string) => {
    if (tab === 'Add') {
      setShowAddOptions(!showAddOptions);
    } else {
      setActiveTab(tab);
      setShowAddOptions(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     {/* <NavigationContainer> */}
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={({}) => (
        <View style={styles.navBarContainer}>
            <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('Home'); props.navigation.navigate('Home'); }}>
              <Image
                source={require('../assets/icons/home.png')}
                style={[styles.navIcon, activeTab === 'Home' && styles.navIconActive]}
              />
              <Text style={activeTab === 'Home' ? styles.navTextActive : styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('Transaction'); props.navigation.navigate('Transaction'); }}>
              <Image
                source={require('../assets/icons/Transaction.png')}
                style={[styles.navIcon, activeTab === 'Transaction' && styles.navIconActive]}
              />
              <Text style={activeTab === 'Transaction' ? styles.navTextActive : styles.navText}>Transaction</Text>
            </TouchableOpacity>

            <View style={styles.addButtonWrapper}>
              <TouchableOpacity style={styles.addButton} onPress={() => handleTabPress('Add')}>
                <Image
                  source={
                    showAddOptions
                      ? require('../assets/icons/close.png')
                      : require('../assets/icons/add.png')
                  }
                  style={styles.addIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.navItem}>
              <Image
                source={require('../assets/icons/Pie-chart.png')}
                style={[styles.navIcon, activeTab === 'Budget' && styles.navIconActive]}
              />
              <Text style={activeTab === 'Budget' ? styles.navTextActive : styles.navText}>Budget</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('Profile'); props.navigation.navigate('Profile'); }}>
              <Image
                source={require('../assets/icons/user.png')}
                style={[styles.navIcon, activeTab === 'Profile' && styles.navIconActive]}
              />
              <Text style={activeTab === 'Profile' ? styles.navTextActive : styles.navText}>Profile</Text>
            </TouchableOpacity>
          </View>
        )}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Transaction" component={TransactionScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

      {showAddOptions && (
        <View style={styles.overlay}>
          <View style={styles.addOptionsContainer}>
            <TouchableOpacity style={styles.incomeButton} onPress={() => props.navigation.navigate('AddIncome')} >
              <Image source={require('../assets/icons/Income-white.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.expenseButton} onPress={() => props.navigation.navigate('AddExpense')}>
              <Image source={require('../assets/icons/Expense-white.png')} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#fff',
  },
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    tintColor: '#B0B0B0',
  },
  navIconActive: {
    tintColor: '#7F3DFF',
  },
  navText: {
    color: '#B0B0B0',
    fontSize: 12,
    marginTop: 5,
  },
  navTextActive: {
    color: '#7F3DFF',
    fontSize: 12,
    marginTop: 5,
  },
  addButtonWrapper: {
    position: 'relative',
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 10,
  },
  addButton: {
    backgroundColor: '#7F3DFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    tintColor: '#fff',
  },
  optionIcon: {
    tintColor: '#fff',
  },
  addOptionsContainer: {
    position: 'absolute',
    bottom: '2%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(237, 227, 255, 0.4)',
    alignItems: 'center',
    bottom: 80,
    zIndex: 1,
  },
  incomeButton: {
    backgroundColor: '#00A86B',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  expenseButton: {
    backgroundColor: '#FD3C4A',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});

export default TabNavigator;
