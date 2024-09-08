import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.overlayTop} />
        <View style={styles.overlayBottom} />
        <View style={styles.profileSection}>
          <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
          <Text style={styles.monthText}>October ▼</Text>
          <TouchableOpacity style={styles.notificationIcon}>
          <Image source={require('../../assets/icons/notifiaction.png')} />
        </TouchableOpacity>
        </View>
      {/* <View style={styles.accountBalanceSection}>
        <Text style={styles.accountBalanceText}>Account Balance</Text>
        <Text style={styles.balanceAmount}>$9400</Text>
        <View style={styles.overviewSection}>
          <View style={styles.overviewBox}>
            <Image source={require('../../assets/icons/eye.png')} style={styles.overviewIcon} />
            <Text style={styles.incomeText}>Income</Text>
            <Text style={styles.amountText}>$5000</Text>
          </View>
          <View style={styles.overviewBox}>
            <Image source={require('../../assets/icons/eye.png')} style={styles.overviewIcon} />
            <Text style={styles.expenseText}>Expenses</Text>
            <Text style={styles.amountText}>$1200</Text>
          </View>
        </View>
      </View> */}
      </View>

      {/* Spend Frequency Graph */}
      <View style={styles.graphSection}>
        <Text style={styles.spendFrequencyText}>Spend Frequency</Text>
        <Image source={require('../../assets/icons/eye.png')} style={styles.graphImage} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsSection}>
        {['Today', 'Week', 'Month', 'Year'].map((tab) => (
          <TouchableOpacity key={tab} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Transactions */}
      <View style={styles.recentTransactionsSection}>
        <Text style={styles.recentTransactionsTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
        {/* <ScrollView style={styles.transactionsList}>
          <TransactionItem title="Shopping" description="Buy some grocery" amount="- $120" />
          <TransactionItem title="Subscription" description="Disney+ Annual.." amount="- $80" />
          <TransactionItem title="Food" description="Buy a ramen" amount="- $32" />
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderBottomEndRadius: 30,
  },
  overlayTop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFF6E6',
    opacity: 0.95,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
  },
  overlayBottom: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(248, 237, 216, 0)',
    top: '50%',
    borderBottomEndRadius: 30,
  },
  content: {
    // position: 'absolute',
  },
  gradient: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  monthText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  notificationIcon: {
    width: 25,
    height: 25,
  },
  accountBalanceSection: {
    // backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
  },
  accountBalanceText: {
    fontSize: 16,
    color: '#888',
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: '700',
    marginVertical: 10,
  },
  overviewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overviewBox: {
    width: '48%',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  overviewIcon: {
    width: 40,
    height: 40,
  },
  incomeText: {
    color: '#2ecc71',
    marginVertical: 5,
  },
  expenseText: {
    color: '#e74c3c',
    marginVertical: 5,
  },
  amountText: {
    fontSize: 18,
    fontWeight: '600',
  },
  graphSection: {
    marginVertical: 20,
  },
  spendFrequencyText: {
    fontSize: 18,
    fontWeight: '600',
  },
  graphImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  tabsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#e1e1e1',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
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
  transactionsList: {
    maxHeight: 200,
  },
});

// const TransactionItem = ({ title, description, amount }) => (
//   <View style={styles.transactionItem}>
//     <View style={styles.transactionDetails}>
//       <Text style={styles.transactionTitle}>{title}</Text>
//       <Text style={styles.transactionDescription}>{description}</Text>
//     </View>
//     <Text style={styles.transactionAmount}>{amount}</Text>
//   </View>
// );

export default HomePage;
