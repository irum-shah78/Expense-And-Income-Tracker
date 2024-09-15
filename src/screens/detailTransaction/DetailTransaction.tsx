import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DashedLine from 'react-native-dashed-line';

const DetailTransactionScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleContinueClick = () => {
    setModalVisible(false);
    setIsModalVisible(true);
    // setTimeout(() => {
    //   setIsModalVisible(false);
    // }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.expenseBackground}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require('../../../src/assets/icons/arrowleft.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detail Transaction</Text>
          <TouchableOpacity>
            <Image source={require('../../../src/assets/icons/trash.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$120</Text>
          <Text style={styles.title}>Buy some grocery</Text>
          <Text style={styles.date}>Saturday 4 June 2021  16:20</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Type</Text>
          <Text style={styles.infoValue}>Expense</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Category</Text>
          <Text style={styles.infoValue}>Shopping</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Wallet</Text>
          <Text style={styles.infoValue}>Wallet</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.Line}>
          <DashedLine dashLength={10} dashThickness={2} dashGap={8} dashColor="#E3E5E5" />
        </View>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet.
        </Text>
        <View>
          <Text style={styles.sectionTitle}>Attachment</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../../../src/assets/images/profile.png')} style={styles.attachmentImage} />
          </View>
        </View>

        {!modalVisible && (
          <View style={styles.whiteBackground}>
            <TouchableOpacity style={styles.continueButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.continueButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}

        <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.dragLineContainer}>
                <Image source={require('../../../src/assets/icons/Line-5.png')} style={styles.dragLine} />
              </View>
              <View style={styles.modalDescriptionContainer}>
                <Text style={styles.modalTitle}>Remove this transaction?</Text>
                <Text style={styles.modalDescription}>Are you sure do you wanna remove this transaction?</Text>
              </View>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.noButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.noButtonText}>No</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.yesButton} onPress={handleContinueClick}>
                  <Text style={styles.yesButtonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer2}>
              <View>
                <Image source={require('../../assets/icons/success.png')} />
              </View>
              <Text style={styles.successMessage}>Transaction has been successfully removed</Text>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 10,
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
  expenseBackground: {
    backgroundColor: '#FD3C4A',
    height: 282,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    position: 'relative',
    zIndex: 1,
  },
  amountContainer: {
    alignItems: 'center',
    backgroundColor: '#FD3C4A',
    paddingVertical: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FCFCFC',
  },
  title: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 4,
  },
  date: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    overflow: 'hidden',
    position: 'absolute',
    top: 220,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
  },
  section: {
    marginVertical: 10,
    padding: 20,
  },
  Line: {
    padding: 2,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#91919F',
    paddingVertical: 15,
  },
  description: {
    fontSize: 16,
    color: '#0D0E0F',
    lineHeight: 20,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  attachmentImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  whiteBackground: {
    backgroundColor: '#fff',
    paddingVertical: 60,
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
    // height: 191,
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
    gap: 3,
  },
  dropText: {
    fontSize: 16,
    color: '#212325',
    borderWidth: 2,
    borderColor: '#FCFCFC',
    borderRadius: 32,
    padding: 8,
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
  selectedFileContainer: {
    width: 118,
    height: 118,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  selectedFileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    right: 1,
    backgroundColor: '#00000052',
    borderRadius: 16,
    padding: 6,
    width: 24,
    height: 24,
  },
  removeIcon: {
    width: 12,
    height: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer2: {
    width: 328,
    height: 128,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  successMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000000',
  },
  modalDescriptionContainer: {
    alignItems: 'center',
  },
  modalTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#91919F',
    paddingVertical: 15,
    lineHeight: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    gap: 10,
  },
  noButton: {
    flex: 1,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginRight: 10,
  },
  noButtonText: {
    color: '#7F3DFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  yesButton: {
    flex: 1,
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  yesButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailTransactionScreen;
