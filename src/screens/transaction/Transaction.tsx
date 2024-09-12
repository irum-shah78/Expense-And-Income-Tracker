import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const TransactionScreen = () => {
  const transactions = [
    {
      title: 'Shopping',
      description: 'Buy some grocery',
      amount: '-$120',
      time: '10:00 AM',
      icon: '../../assets/icons/shopping-bag.png',
      color: '#FFB800',
    },
    {
      title: 'Subscription',
      description: 'Disney+ Annual...',
      amount: '-$80',
      time: '03:30 PM',
      icon: '../../assets/icons/recurring-bill.png',
      color: '#C560F7',
    },
    {
      title: 'Food',
      description: 'Buy a ramen',
      amount: '-$32',
      time: '07:30 PM',
      icon: '../../assets/icons/restaurant.png',
      color: '#F7777C',
    },
    {
      title: 'Salary',
      description: 'Salary for July',
      amount: '+5000',
      time: '04:30 PM',
      icon: '../../assets/icons/Salary.png',
      color: '#52B788',
    },
    {
      title: 'Transportation',
      description: '../../assets/icons/car.png',
      amount: '-$18',
      time: '08:30 PM',
      icon: 'car-outline',
      color: '#5290F7',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Month</Text>
          {/* <Ionicons name="chevron-down-outline" size={16} color="black" /> */}
          <Image source={require('../../../src/assets/icons/arrow-down-month.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <Ionicons name="filter-outline" size={24} color="black" /> */}
          <Image source={require('../../../src/assets/icons/sort.png')}/>
        </TouchableOpacity>
      </View>

      {/* Report Button */}
      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportButtonText}>See your financial report</Text>
        {/* <Ionicons name="arrow-forward-outline" size={20} color="#7F56D9" /> */}
        <Image source={require('../../../src/assets/icons/arrow-right-2.png')}/>
      </TouchableOpacity>

      {/* Transactions */}
      <ScrollView style={styles.transactionsContainer}>
        <Text style={styles.dateTitle}>Today</Text>
        {transactions.slice(0, 3).map((item, index) => (
          <View style={styles.transactionCard} key={index}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              {/* <Ionicons name={item.icon} size={20} color="white" /> */}
              <Image source={item.icon}/>
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionDescription}>{item.description}</Text>
            </View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text style={styles.transactionTime}>{item.time}</Text>
          </View>
        ))}
        <Text style={styles.dateTitle}>Yesterday</Text>
        {transactions.slice(3).map((item, index) => (
          <View style={styles.transactionCard} key={index}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              {/* <Ionicons name={item.icon} size={20} color="white" /> */}
              <Image source={item.icon}/>
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{item.title}</Text>
              <Text style={styles.transactionDescription}>{item.description}</Text>
            </View>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
            <Text style={styles.transactionTime}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 6,
  },
  dropdownText: {
    marginRight: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  reportButton: {
    backgroundColor: '#F3E8FF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  reportButtonText: {
    color: '#7F56D9',
    fontSize: 16,
    fontWeight: '500',
  },
  transactionsContainer: {
    marginTop: 12,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 8,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionDescription: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E74C3C',
    marginLeft: 'auto',
    marginRight: 8,
  },
  transactionTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default TransactionScreen;
