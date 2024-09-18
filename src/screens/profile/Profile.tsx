import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import DashedLine from 'react-native-dashed-line';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  const handleContinueClick = () => {
    dispatch(logout());
    setModalVisible(false);
    props.navigation.navigate('SignIn');
  };

  const userName = user?.displayName || 'Username';

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.border}>
          <Image
            source={user?.photoURL ? { uri: user.photoURL } : require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />

        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.usernameLabel}>Username</Text>
          <Text style={styles.username}>{userName}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => props.navigation.navigate('UpdateProfile')}>
          <Image
            source={require('../../assets/icons/edit.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem} onPress={() => props.navigation.navigate('UpdateProfile')}>
          <View style={[styles.iconContainer, styles.settingsIconContainer]}>
            <Image
              source={require('../../assets/icons/settings.png')}
            />
          </View>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.Line}>
          <DashedLine dashLength={9} dashThickness={1} dashGap={0} dashColor="#F1F1FA" />
        </View>

        <TouchableOpacity style={styles.optionItem} onPress={() => props.navigation.navigate('ResetPassword')}>
          <View style={[styles.iconContainer, styles.resetIconContainer]}>
            <Image
              source={require('../../assets/icons/warning.png')}
            />
          </View>
          <Text style={styles.optionText}>Reset Password</Text>
        </TouchableOpacity>

        <View style={styles.Line}>
          <DashedLine dashLength={9} dashThickness={1} dashGap={0} dashColor="#F1F1FA" />
        </View>

        <TouchableOpacity style={styles.optionItem} onPress={() => setModalVisible(true)}>
          <View style={[styles.iconContainer, styles.logoutIconContainer]}>
            <Image
              source={require('../../assets/icons/logout.png')}
            />
          </View>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.dragLineContainer}>
              <Image source={require('../../../src/assets/icons/Line-5.png')} style={styles.dragLine} />
            </View>
            <View style={styles.modalDescriptionContainer}>
              <Text style={styles.modalTitle}>Logout?</Text>
              <Text style={styles.modalDescription}>Are you sure you want to logout?</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  profileDetails: {
    marginLeft: 15,
    flex: 1,
  },
  usernameLabel: {
    color: '#91919F',
    fontSize: 14,
  },
  username: {
    color: '#161719',
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    padding: 10,
  },
  Line: {
    marginBottom: 20,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 5,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingsIconContainer: {
    backgroundColor: '#EEE5FF',
  },
  resetIconContainer: {
    backgroundColor: '#EEE5FF',
  },
  logoutIconContainer: {
    backgroundColor: '#FFE2E4',
  },
  optionText: {
    fontSize: 16,
    color: '#292B2D',
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

export default ProfileScreen;
