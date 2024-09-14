import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const FinancialReportScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'Expense' | 'Income'>('Expense');
  const expenseData = [
    { category: 'Shopping', amount: '-$120', color: '#FCAC12' },
    { category: 'Subscription', amount: '-$80', color: '#7F3DFF' },
    { category: 'Food', amount: '-$32', color: '#FD3C4A' },
  ];

  const incomeData = [
    { category: 'Salary', amount: '+$5000', color: '#00A86B' },
    { category: 'Passive Income', amount: '+$200', color: '#0D0E0F' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../src/assets/icons/arrow-left-onboarding.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Financial Report</Text>
      </View>

      {/* Month Dropdown & Timer */}
      <View style={styles.header2}>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../../../src/assets/icons/arrow-down-month.png')} />
          <Text style={styles.dropdownText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timer}>
          <Image source={require('../../../src/assets/icons/pie-chart-time.png')} />
        </TouchableOpacity>
      </View>

      {/* Donut Chart */}
      <View style={styles.chartContainer}>
        <TouchableOpacity>
          <Image
            source={
              activeTab === 'Expense'
                ? require('../../../src/assets/images/Group-1.png')
                : require('../../../src/assets/images/Group-2.png')
            }
          />
        </TouchableOpacity>
      </View>

      {/* Expense/Income Toggle */}
      <View style={styles.toggleContainer}>
        {/* Button Switcher */}
        <View style={styles.switcher}>
          <TouchableOpacity
            style={[styles.button, activeTab === 'Expense' && styles.activeButton]}
            onPress={() => setActiveTab('Expense')}
          >
            <Text style={[styles.buttonText, activeTab === 'Expense' && styles.activeText]}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeTab === 'Income' && styles.activeButton]}
            onPress={() => setActiveTab('Income')}
          >
            <Text style={[styles.buttonText, activeTab === 'Income' && styles.activeText]}>Income</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories and Amounts */}
      <View style={styles.header2}>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../../../src/assets/icons/arrow-down-month.png')} />
          <Text style={styles.dropdownText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort}>
          <Image source={require('../../../src/assets/icons/sort-highest-lowest.png')} />
        </TouchableOpacity>
      </View>

      {/* Conditionally Render Category Items Based on Active Tab */}
      <ScrollView style={styles.listContainer} >
        {(activeTab === 'Expense' ? expenseData : incomeData).map((item, index) => (
          <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => navigation.navigate('DetailTransactionScreen')} >
            <View style={styles.itemLeft}>
              <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
              <Text style={styles.itemCategory}>{item.category}</Text>
            </View>
            <Text style={[styles.itemAmount, activeTab === 'Income' && styles.incomeAmount]}>{item.amount}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingVertical: 20 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
    gap: 80,
    paddingVertical: 15,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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
  timer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#7F3DFF',
    borderRadius: 8,
    backgroundColor: '#7F3DFF',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  chartContainer: { alignItems: 'center' },
  toggleContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15%' },
  sort: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 8,
  },
  listContainer: { paddingLeft: 20, paddingRight: 20 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  colorIndicator: { width: 10, height: 10, borderRadius: 5, marginRight: 10 },
  itemCategory: { fontSize: 16, color: '#333' },
  itemAmount: { fontSize: 24, color: '#FD3C4A' },
  incomeAmount: { color: '#00A86B' },
  switcher: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#F0F0F0',
    overflow: 'hidden',
    borderColor: '#F0F0F0',
    marginBottom: 20,
    height: 50,
    width: 334,
  },
  button: {
    width: 167,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 32,
    backgroundColor: 'transparent',
  },
  activeButton: {
    backgroundColor: '#7F3DFF',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  activeText: {
    color: 'white',
  },
});

export default FinancialReportScreen;
