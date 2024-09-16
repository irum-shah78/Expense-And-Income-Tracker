import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Modal } from 'react-native';

const TransactionScreen = (props:any) => {
  const [modalVisible, setModalVisible] = useState(false);
    // const navigation = useNavigation();
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
    {
      id: 4,
      icon: require('../../assets/icons/Salary.png'),
      name: 'Salary',
      description: 'Salary for July',
      price: '+ 5000',
      time: '04:30 PM',
      backgroundColor: '#CFFAEA',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 16,
    },
    {
      id: 5,
      icon: require('../../assets/icons/car.png'),
      name: 'Transportation',
      description: 'Charging Tesla',
      price: '$18',
      time: '08:30 PM',
      backgroundColor: '#BDDCFF',
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 16,
    },

  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../../../src/assets/icons/arrow-down-month.png')} />
          <Text style={styles.dropdownText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort} onPress={() => setModalVisible(true)}>
          <Image source={require('../../../src/assets/icons/sort.png')} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.reportButton} onPress={() => props.navigation.navigate('FinancialReportScreen')}>
        <Text style={styles.reportButtonText}>See your financial report</Text>
        <Image source={require('../../../src/assets/icons/arrow-right-2.png')} />
      </TouchableOpacity>

      <ScrollView style={styles.transactionsContainer}>
        <Text style={styles.dateTitle}>Today</Text>
        {data.slice(0, 3).map((item, index) => (
          <View key={index} style={styles.rowContainer}>
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
        <Text style={styles.dateTitle}>Yesterday</Text>
        {data.slice(3).map((item, index) => (
          <View key={index} style={styles.rowContainer}>
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
      </ScrollView>

      <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.dragLineContainer}>
              <Image source={require('../../../src/assets/icons/Line-5.png')} style={styles.dragLine} />
            </View>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter Transaction</Text>
              <TouchableOpacity onPress={() => {/* Reset Functionality */ }} style={styles.resetButton}>
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Filter By</Text>
              <View style={styles.filterOptions}>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>Income</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filterButton, styles.selectedFilter]}>
                  <Text style={styles.resetText}>Expense</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sort By</Text>
              <View style={styles.sortOptions}>
                {['Highest', 'Lowest', 'Newest', 'Oldest'].map((option) => (
                  <TouchableOpacity key={option} style={styles.sortButton}>
                    <Text style={styles.sortText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Category</Text>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryButtonText}>Choose Category</Text>
                <View style={styles.selectedContainer}>
                  <Text style={styles.categorySelected}>0 Selected</Text>
                  <Image source={require('../../../src/assets/icons/arrow-right-2.png')} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.whiteBackground}>
              <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    textAlign: 'center',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 40,
    gap: 4,
  },
  dropdownText: {
    marginRight: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  sort: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 8,
  },
  reportButton: {
    backgroundColor: '#EEE5FF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  reportButtonText: {
    color: '#7F3DFF',
    fontSize: 16,
    fontWeight: '500',
  },
  transactionsContainer: {
    marginTop: 12,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 4,
    color: '#0D0E0F',
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
  rowContainer: {
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    height: 89,
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
  dragLineContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  dragLine: {
    width: 60,
    height: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  resetText: {
    fontSize: 16,
    color: '#A020F0',
  },
  resetButton: {
    backgroundColor: '#EEE5FF',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 15,
  },
  section: {
    width: '100%',
    gap: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  filterOptions: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E3E5E5',
  },
  selectedFilter: {
    backgroundColor: '#EEE5FF',
    borderColor: 'transparent',
  },
  filterText: {
    color: '#000',
    fontSize: 14,
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  sortButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E3E5E5',
    marginBottom: 10,
  },
  sortText: {
    color: '#000',
    fontSize: 14,
  },
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryButtonText: {
    color: '#000',
    fontSize: 16,
  },
  categorySelected: {
    color: '#91919F',
    fontSize: 14,
    textAlign: 'right',
  },
  selectedContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  whiteBackground: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
  },
  continueButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransactionScreen;
