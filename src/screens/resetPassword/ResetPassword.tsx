import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { resetPassword } from '../../store/slices/authSlice';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = (props: any) => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [retypeNewPassword, setRetypeNewPassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();

  const handleChangePassword = () => {
    if (newPassword !== retypeNewPassword) {
      ToastAndroid.show("Passwords don't match!", ToastAndroid.LONG);
      return;
    }

    if (newPassword === currentPassword) {
      ToastAndroid.show('New password must be different from the old password.', ToastAndroid.LONG);
      return;
    }

    dispatch(resetPassword({ currentPassword, newPassword }) as any)
      .unwrap()
      .then(() => {
        ToastAndroid.show('Password updated successfully!.', ToastAndroid.LONG);
        props.navigation.navigate('Profile');
      })
      .catch((error: any) => {
        ToastAndroid.show(`Error updating password: ${error}`, ToastAndroid.LONG);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../../src/assets/icons/arrow-left-onboarding.png')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reset Password</Text>
        </View>

        {/* Add current password input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            placeholderTextColor={'#91919F'}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            value={currentPassword}
            onChangeText={(pwd) => setCurrentPassword(pwd)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor={'#91919F'}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            value={newPassword}
            onChangeText={(pwd) => setNewPassword(pwd)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Retype New Password"
            placeholderTextColor={'#91919F'}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            value={retypeNewPassword}
            onChangeText={(pwd) => setRetypeNewPassword(pwd)}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleChangePassword}
        disabled={loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.updateButtonText}>Change Password</Text>}
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
    gap: 80,
    paddingVertical: 25,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    padding: 5,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  updateButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  updateButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ResetPasswordScreen;
