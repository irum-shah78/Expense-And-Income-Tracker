import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddExpense = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('Category');
  const [selectedWallet, setSelectedWallet] = useState<string>('Wallet');
  const [walletDropdownVisible, setWalletDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Handle option selection
  const handleSelect = (option:string) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

    // Toggle wallet dropdown visibility
    const toggleWalletDropdown = () => {
      setWalletDropdownVisible(!walletDropdownVisible);
    };

    // Handle wallet option selection
    const handleWalletSelect = (option: string) => {
      setSelectedWallet(option);
      setWalletDropdownVisible(false);
    };


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
        <Text style={styles.headerTitle}>Expense</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>How much?</Text>
        <Text style={styles.amountValue}>$0</Text>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputField} onPress={toggleDropdown}>
          <Text style={styles.placeholderText}>{selectedOption}</Text>
          <Image source={require('../../../src/assets/icons/arrow-down2.png')} />
        </TouchableOpacity>
        {dropdownVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.option} onPress={() => handleSelect('Option 1')}>
              <Text style={styles.placeholderText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelect('Option 2')}>
              <Text style={styles.placeholderText}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => handleSelect('Option 3')}>
              <Text style={styles.placeholderText}>Option 3</Text>
            </TouchableOpacity>
          </View>
        )}

<TouchableOpacity style={styles.inputField} onPress={toggleWalletDropdown}>
        <Text style={styles.placeholderText}>{selectedWallet}</Text>
        <Image
          source={require('../../../src/assets/icons/arrow-down2.png')}
        />
      </TouchableOpacity>

      {walletDropdownVisible && (
        <View style={styles.dropdown2}>
          <TouchableOpacity style={styles.option} onPress={() => handleWalletSelect('PayPal')}>
            <Text style={styles.placeholderText}>PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleWalletSelect('Credit Card')}>
            <Text style={styles.placeholderText}>Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleWalletSelect('Bank Transfer')}>
            <Text style={styles.placeholderText}>Bank Transfer</Text>
          </TouchableOpacity>
        </View>
      )}
        <TextInput
          style={styles.inputField}
          placeholder="Description"
          placeholderTextColor="#91919F"
        />
        <TouchableOpacity style={styles.attachmentButton} onPress={() => setModalVisible(true)}>
          <Image source={require('../../../src/assets/icons/attachment.png')} />
          <Text style={styles.attachmentText}>Add attachment</Text>
        </TouchableOpacity>
      </View>

      {!modalVisible && (
        <View style={styles.whiteBackground}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.dragLineContainer}>
              <Image
                source={require('../../../src/assets/icons/Line-5.png')}
                style={styles.dragLine}
              />
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.optionButton1}>
                <Image
                  source={require('../../../src/assets/icons/camera.png')}
                  style={styles.optionIcon}
                />
                <Text style={styles.optionText}>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton2}>
                <Image
                  source={require('../../../src/assets/icons/gallery.png')}
                  style={styles.optionIcon}
                />
                <Text style={styles.optionText}>Image</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionButton3}>
                <Image
                  source={require('../../../src/assets/icons/file.png')}
                  style={styles.optionIcon}
                />
                <Text style={styles.optionText}>Document</Text>
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
    backgroundColor: '#FD3C4A',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 10,
  },
  dragLineContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  dragLine: {
    width: 40,
    height: 5,
    backgroundColor: '#C4C4C4',
    borderRadius: 2.5,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  optionButton1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    padding: 20,
    paddingHorizontal: 25,
  },
  optionButton2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    padding: 20,
    paddingHorizontal: 35,
  },
  optionButton3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    padding: 20,
  },
  optionIcon: {
    marginBottom: 10,
  },
  optionText: {
    color: '#7F3DFF',
    fontSize: 16,
  },
  dropdown: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderWidth: 1,
    zIndex: 1000,
    paddingBottom: 5,
    gap: 3,
  },
  dropdown2: {
    position: 'absolute',
    top: '60%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderColor: 'transparent',
    borderWidth: 1,
    elevation: 4,
    zIndex: 1000,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F1F1FA',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginHorizontal: 20,
  },
});

export default AddExpense;
