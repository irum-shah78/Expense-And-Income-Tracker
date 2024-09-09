import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState('Today');
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
      paddingTop: 2,
      paddingBottom: 2,
      paddingRight: 2,
      paddingLeft: 2,
    },
    {
      id: 2,
      icon: require('../../assets/icons/recurring-bill.png'),
      name: 'Subscription',
      description: 'Disney+ Annual..',
      price: '$80',
      time: '03:30 PM',
      backgroundColor: '#fbe9e7',
    },
    {
      id: 3,
      icon: require('../../assets/icons/restaurant.png'),
      name: 'Food',
      description: 'Buy a ramen',
      price: '$32',
      time: '07:30 PM',
      backgroundColor: '#fbe9e7',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
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
        {data.map((item) => (
          <View key={item.id} style={[styles.row]} >
            <View style={styles.leftSection}>
              <View style={[{ backgroundColor: item.backgroundColor, paddingTop: item.paddingTop,paddingBottom: item.paddingBottom,paddingLeft: item.paddingLeft,paddingRight: item.paddingRight}]}>
                <Image source={item.icon} style={styles.icon} />
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
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
  },
  header: {
    height: 270,
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
    paddingTop: 8,
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
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    gap: 6,
  },
  accountBalanceSection: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
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
    marginVertical: 10,
    marginHorizontal: 5,
  },
  spendFrequencyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0D0E0F',
  },
  graphImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  recentTransactionsSection: {
    marginTop: 20,
  },
  recentTransactionsTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  seeAllText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'right',
    marginVertical: 5,
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
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  icon: {
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomePage;
