import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const HomePage = (props:any) => {
  const [selectedTab, setSelectedTab] = useState('Today');
  const [activeTab, setActiveTab] = useState('Home');
  const [showAddOptions, setShowAddOptions] = useState(false);
  // const navigation = useNavigation();
  const tabs = ['Today', 'Week', 'Month', 'Year'];

  const data = [
    {
      id: 1,
      icon: require('../../assets/icons/shopping-bag.png'),
      name: 'Shopping',
      description: 'Buy some grocery',
      price: '$120',
      time: '10:00 AM',
      backgroundColor: '#FCEED4',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 16,
    },
    {
      id: 2,
      icon: require('../../assets/icons/recurring-bill.png'),
      name: 'Subscription',
      description: 'Disney+ Annual..',
      price: '$80',
      time: '03:30 PM',
      backgroundColor: '#EEE5FF',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 16,
    },
    {
      id: 3,
      icon: require('../../assets/icons/restaurant.png'),
      name: 'Food',
      description: 'Buy a ramen',
      price: '$32',
      time: '07:30 PM',
      backgroundColor: '#FDD5D7',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 16,
    },
  ];

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
      {showAddOptions && (
        <View style={styles.overlay}>
          <View style={styles.addOptionsContainer}>
            <TouchableOpacity style={styles.incomeButton} onPress={() => props.navigation.navigate('AddIncome')} >
              <Image source={require('../../assets/icons/Income-white.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.expenseButton} onPress={() => props.navigation.navigate('AddExpense')}>
              <Image source={require('../../assets/icons/Expense-white.png')} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.overlayTop} />
        <View style={styles.overlayBottom} />
        <View style={styles.profileSection}>
          <View style={styles.border}>
            <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
          </View>
          <View>
            <TouchableOpacity style={styles.droppDown}>
              <Image source={require('../../assets/icons/arrow-down-month.png')} />
              <Text style={styles.monthText}>October</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Image source={require('../../assets/icons/notifiaction.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.accountBalanceSection}>
          <Text style={styles.accountBalanceText}>Account Balance</Text>
          <Text style={styles.balanceAmount}>$9400</Text>
          <View style={styles.overviewSection}>
            <View style={styles.overviewBox1}>
              <View style={styles.incomeImage}>
                <Image source={require('../../assets/icons/Income.png')} />
              </View>
              <View>
                <Text style={styles.incomeText}>Income</Text>
                <Text style={styles.amountText}>$5000</Text>
              </View>
            </View>
            <View style={styles.overviewBox2}>
              <View style={styles.incomeImage}>
                <Image source={require('../../assets/icons/Expense.png')} />
              </View>
              <View>
                <Text style={styles.expenseText}>Expenses</Text>
                <Text style={styles.amountText}>$1200</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.graphSection}>
        <Text style={styles.spendFrequencyText}>Spend Frequency</Text>
        <Image source={require('../../assets/images/Group.png')} style={styles.graphImage} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsSection}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Transactions */}
      <View style={styles.transactionContainer}>
        <View style={styles.recentHeader}>
          <Text style={styles.headerTitle}>Recent Transaction</Text>
          <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        {data.map((item) => (
          <View key={item.id} style={styles.rowContainer}>
            <View style={styles.row}>
              <View style={styles.leftSection}>
                <View
                  style={[
                    styles.iconWrapper,
                    {
                      backgroundColor: item.backgroundColor,
                      paddingTop: item.paddingTop,
                      paddingBottom: item.paddingBottom,
                      paddingLeft: item.paddingLeft,
                      paddingRight: item.paddingRight,
                      borderRadius: item.borderRadius,
                    },
                  ]}
                >
                  <Image source={item.icon} />
                </View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
              <View style={styles.rightSection}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBarContainer}>
        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Home')}>
          <Image
            source={require('../../assets/icons/home-on.png')}
            style={[styles.navIcon, activeTab === 'Home' && styles.navIconActive]}
          />
          <Text style={activeTab === 'Home' ? styles.navTextActive : styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Transaction')}>
          <Image
            source={require('../../assets/icons/Transaction.png')}
            style={[styles.navIcon, activeTab === 'Transaction' && styles.navIconActive]}
          />
          <Text style={activeTab === 'Transaction' ? styles.navTextActive : styles.navText}>Transaction</Text>
        </TouchableOpacity>

        <View style={styles.addButtonWrapper}>
          <TouchableOpacity style={styles.addButton} onPress={() => handleTabPress('Add')}>
            <Image
              source={
                showAddOptions
                  ? require('../../assets/icons/close.png')
                  : require('../../assets/icons/add.png')
              }
              style={styles.addIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Budget')}>
          <Image
            source={require('../../assets/icons/Pie-chart.png')}
            style={[styles.navIcon, activeTab === 'Budget' && styles.navIconActive]}
          />
          <Text style={activeTab === 'Budget' ? styles.navTextActive : styles.navText}>Budget</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleTabPress('Profile')}>
          <Image
            source={require('../../assets/icons/user.png')}
            style={[styles.navIcon, activeTab === 'Profile' && styles.navIconActive]}
          />
          <Text style={activeTab === 'Profile' ? styles.navTextActive : styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 250,
  },
  overlayTop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFF6E6',
    opacity: 1,
    borderBottomEndRadius: 32,
    borderBottomLeftRadius: 32,
  },
  overlayBottom: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(248, 237, 216, 0)',
    // top: '50%',
    borderBottomEndRadius: 30,
  },
  content: {
    position: 'absolute',
  },
  gradient: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
  },
  border: {
    borderWidth: 2,
    borderRadius: 50,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    borderColor: '#AD00FF',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 25,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  droppDown: {
    borderRadius: 40,
    borderColor: '#F1F1FA',
    height: 60,
    width: 120,
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    gap: 6,
  },
  accountBalanceSection: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  accountBalanceText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#91919F',
    textAlign: 'center',
  },
  balanceAmount: {
    fontSize: 40,
    fontWeight: '600',
    marginVertical: 10,
    color: '#161719',
    textAlign: 'center',
  },
  overviewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  overviewBox1: {
    width: '50%',
    backgroundColor: '#00A86B',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  overviewBox2: {
    backgroundColor: '#FD3C4A',
    width: '50%',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  incomeImage: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  expenseImage: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  incomeText: {
    color: '#FCFCFC',
    marginVertical: 5,
    fontSize: 14,
  },
  expenseText: {
    color: '#FCFCFC',
    marginVertical: 5,
    fontSize: 14,
  },
  amountText: {
    fontWeight: '600',
    color: '#FCFCFC',
    fontSize: 22,
  },
  graphSection: {
    // marginVertical: 10,
    marginHorizontal: 5,
  },
  spendFrequencyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0D0E0F',
  },
  graphImage: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
  },
  recentTransactionsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  tabsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#FCEED4',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: '#FCAC12',
    fontWeight: 700,
    fontSize: 14,
  },
  inactiveTabText: {
    color: '#91919F',
    fontWeight: 500,
    fontSize: 14,
  },
  transactionContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    color: '#292B2D',
    fontSize: 20,
    fontWeight: '600',
  },
  seeAllButton: {
    backgroundColor: '#EEE5FF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  seeAllText: {
    color: '#7F3DFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  rowContainer: {
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#292B2D',
  },
  description: {
    fontSize: 13,
    color: '#91919F',
    paddingTop: 6,
  },
  rightSection: {
    alignItems: 'flex-end',
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FD3C4A',
  },
  time: {
    fontSize: 13,
    color: '#91919F',
    paddingTop: 6,
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
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
});

export default HomePage;
