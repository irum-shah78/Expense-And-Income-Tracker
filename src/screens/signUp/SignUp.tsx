// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const SignUp = () => {
//   return (
//     <View>
//       <Text>SignUp</Text>

//     </View>
//   )
// }

// export default SignUp

// const styles = StyleSheet.create({})

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isChecked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      {/* Name Input */}
      <TextInput style={styles.input} placeholder="Name" />

      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      {/* Password Input with Toggle Visibility using Image */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={
              passwordVisible
                ? require('../../../src/assets/icons/eye.png') // Replace with your image path
                : require('../../../src/assets/icons/eye.png') // Replace with your image path
            }
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setChecked}
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>
          By signing up, you agree to the{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign Up with Google Button using Image */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../../../src/assets/icons/flat-color-icons_google.png')} // Replace with your image path
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}> Sign Up with Google</Text>
      </TouchableOpacity>

      {/* Login Redirect */}
      <Text style={styles.loginRedirectText}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 8,
  },
  termsText: {
    flex: 1,
    color: '#444',
  },
  link: {
    color: '#6200EE',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
  },
  loginRedirectText: {
    textAlign: 'center',
    color: '#444',
  },
});
