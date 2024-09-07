import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../src/hooks/index';
import { resetPassword, checkEmailExists } from '../../store/slices/authSlice';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const { loading, error, emailExists } = useAppSelector((state) => state.auth);
  const navigation = useNavigation();

  const handleSendEmail = async () => {
    if (!email) {
      ToastAndroid.show('Please enter your email.', ToastAndroid.SHORT);
      return;
    }

    try {
      await dispatch(checkEmailExists(email)).unwrap();
      if (!emailExists) {
        ToastAndroid.show('Email not registered.', ToastAndroid.SHORT);
        return;
      }
      dispatch(resetPassword(email))
        .unwrap()
        .then((message) => {
          ToastAndroid.show(message, ToastAndroid.LONG);
        })
        .catch((errorMessage) => {
          ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        });

    } catch (err) {
      ToastAndroid.show('Error checking email existence.', ToastAndroid.LONG);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../../../src/assets/icons/arrow-left-onboarding.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Don’t worry.</Text>
        <Text style={styles.description}>
          Enter your email and we’ll send you a link to reset your password.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#91919F"
        />

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#7F3DFF" />
          </View>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
            <Text style={styles.buttonText}>Send Email</Text>
          </TouchableOpacity>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    gap: 80,
    marginTop: 30,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    objectFit: 'contain',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    marginTop: '40%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#F1F1FA',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 30,
    color: 'black',
  },
  button: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
    loadingContainer: {
    marginVertical: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});
