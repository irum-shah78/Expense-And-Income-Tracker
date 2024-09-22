import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ToastAndroid, SafeAreaView, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../store/slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import { AppDispatch } from '../../store/store';

const SignUpScreen = (props: any) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isChecked, setChecked] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleRegister = () => {
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      ToastAndroid.show('Please fill all the fields.', ToastAndroid.CENTER);
      return;
    }

    if (password.length < 6) {
      ToastAndroid.show('Password must be at least 6 characters long.', ToastAndroid.CENTER);
      return;
    }

    dispatch(userRegister({ name, email, password }))
      .unwrap()
      .then(() => {
        ToastAndroid.show('User account created & signed in!', ToastAndroid.LONG);
        props.navigation.navigate('SignIn');
      })
      .catch((error: any) => {
        console.error('Registration failed:', error);
        ToastAndroid.show(error.message || 'Registration failed. Please try again.', ToastAndroid.LONG);
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require('../../../src/assets/icons/arrow-left-onboarding.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor={'#91919F'}
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#91919F'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={'#91919F'}
                secureTextEntry={!passwordVisible}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Image
                  source={
                    passwordVisible
                      ? require('../../../src/assets/icons/eye.png')
                      : require('../../../src/assets/icons/eye-close.png')
                  }
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                style={styles.checkbox}
                tintColors={{ true: '#7F3DFF', false: '#7F3DFF' }}
              />
              <Text style={styles.termsText}>
                By signing up, you agree to the{' '}
                <Text style={styles.link}>Terms of Service and Privacy Policy</Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.signUpButton} onPress={handleRegister}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.googleButton}>
              <Image
                source={require('../../../src/assets/icons/flat-color-icons_google.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}> Sign Up with Google</Text>
            </TouchableOpacity>

            <Text style={styles.loginRedirectText}>
              Already have an account? <Text style={styles.loginLink} onPress={() => props.navigation.navigate('SignIn')}>Login</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginTop: 30,
    color: 'black',
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 60,
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    gap: 80,
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
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 17,
  },
  iconImage: {
    objectFit: 'contain',
    height: 24,
    width: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  orText: {
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 15,
    color: 'gray',
  },
  link: {
    color: '#7F3DFF',
  },
  signUpButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    height: 56,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    height: 56,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F1F1FA',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#212325',
    fontSize: 18,
  },
  loginRedirectText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  loginLink: {
    color: '#7F3DFF',
    textDecorationLine: 'underline',
  },
});
