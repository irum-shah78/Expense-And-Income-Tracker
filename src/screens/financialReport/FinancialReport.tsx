import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const FinancialReportScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../../src/assets/icons/arrow-left-onboarding.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Financial Report</Text>
      </View>

      <View style={styles.header2}>
        <TouchableOpacity style={styles.dropdown}>
          <Image source={require('../../../src/assets/icons/arrow-down-month.png')} />
          <Text style={styles.dropdownText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sort} onPress={() => setModalVisible(true)}>
          <Image source={require('../../../src/assets/icons/sort.png')} />
        </TouchableOpacity>
      </View>

      {/* Donut Chart */}
      <View style={styles.chartContainer}>
        <View style={styles.donutChart}>
          {/* Placeholder for the Donut Chart */}
          <Text style={styles.chartAmount}>$332</Text>
        </View>
        <TouchableOpacity style={styles.chartIconButton}>
          <Image source={require('../../../src/assets/icons/pie-chart-time.png')} />
        </TouchableOpacity>
      </View>

      {/* Expense/Income Toggle */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.expenseButton}>
          <Text style={styles.toggleTextActive}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incomeButton}>
          <Text style={styles.toggleTextInactive}>Income</Text>
        </TouchableOpacity>
      </View>

      {/* Categories and Amounts */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Category</Text>
          <Image source={require('../../../src/assets/icons/arrow-down2.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../../src/assets/icons/sort-highest-lowest.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.listContainer}>
        {/* Sample Category Items */}
        {[
          { category: 'Shopping', amount: '-$120', color: '#FFBF47' },
          { category: 'Subscription', amount: '-$80', color: '#8C71F2' },
          { category: 'Food', amount: '-$32', color: '#FF5E5E' },
        ].map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemLeft}>
              <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
              <Text style={styles.itemCategory}>{item.category}</Text>
            </View>
            <Text style={styles.itemAmount}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingVertical: 10 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    gap: 80,
  },
  header2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
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
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  chartContainer: { alignItems: 'center', marginVertical: 20 },
  donutChart: { width: 200, height: 200, borderRadius: 100, backgroundColor: '#F1F1F1', justifyContent: 'center', alignItems: 'center' },
  chartAmount: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  chartIconButton: { position: 'absolute', top: 20, right: 20 },
  toggleContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 20 },
  expenseButton: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#8C71F2', borderRadius: 20 },
  incomeButton: { paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#E6E6E6', borderRadius: 20 },
  toggleTextActive: { color: '#FFF', fontWeight: 'bold' },
  toggleTextInactive: { color: '#999' },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginVertical: 10 },
  categoryButton: { flexDirection: 'row', alignItems: 'center' },
  filterButton: { padding: 10 },
  listContainer: { paddingHorizontal: 16 },
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  colorIndicator: { width: 10, height: 10, borderRadius: 5, marginRight: 10 },
  itemCategory: { fontSize: 16, color: '#333' },
  itemAmount: { fontSize: 16, color: '#FF3B30' },
});

export default FinancialReportScreen;
