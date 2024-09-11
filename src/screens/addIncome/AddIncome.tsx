import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddIncome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../src/assets/icons/arrowleft.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Income</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>How much?</Text>
        <Text style={styles.amountValue}>$0</Text>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.placeholderText}>Category</Text>
          <Image source={require('../../../src/assets/icons/arrow-down2.png')} />
        </TouchableOpacity>
        <TextInput
          style={styles.inputField}
          placeholder="Description"
          placeholderTextColor="#91919F"
        />
        <TouchableOpacity style={styles.attachmentButton}>
          <Image source={require('../../../src/assets/icons/attachment.png')} />
          <Text style={styles.attachmentText}>Add attachment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.whiteBackground}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A86B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 90,
  },
  backButton: {
    marginRight: 20,
  },
  backIcon: {
    objectFit: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  amountContainer: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  amountLabel: {
    fontSize: 18,
    color: '#FCFCFC',
    marginBottom: 10,
  },
  amountValue: {
    fontSize: 64,
    color: '#FCFCFC',
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 0,
    paddingTop: 40,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#F1F1FA',
    borderWidth: 1,
    borderRadius: 16,
    height: 56,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  placeholderText: {
    color: '#91919F',
    fontSize: 16,
  },
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderColor: '#F1F1FA',
    borderWidth: 1,
    borderRadius: 16,
    height: 56,
    padding: 15,
    marginBottom: 10,
  },
  attachmentText: {
    color: '#91919F',
    fontSize: 16,
  },
  whiteBackground: {
    backgroundColor: '#fff',
    padding: 20,
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

export default AddIncome;
