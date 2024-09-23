import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ToastAndroid, SafeAreaView, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { googleSignIn, login } from '../../store/slices/authSlice';
import { AppDispatch } from '../../store/store';

const SignInScreen = (props: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '153932310972-7o5t86d76tli42v6u13bdj1t7u1q5mh1.apps.googleusercontent.com',
      offlineAccess: false,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      dispatch(googleSignIn())
        .unwrap()
        .then(() => {
          ToastAndroid.show('Google Sign-In successful!', ToastAndroid.LONG);
          props.navigation.navigate('Home');
        })
        .catch((error: string) => {
          console.error('Google Sign-In Error:', error);
          ToastAndroid.show(error, ToastAndroid.LONG);
        });
    } catch (error: any) {
      console.error('Google Sign-In Error:', error);
      ToastAndroid.show('Google Sign-In failed. Please try again.', ToastAndroid.LONG);
    }
  };

  const userSignIn = () => {
    if (email.length === 0 || password.length === 0) {
      ToastAndroid.show('Please fill all the fields.', ToastAndroid.CENTER);
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        ToastAndroid.show('Signed in successfully!', ToastAndroid.LONG);
        dispatch(login(userCredential.user));
        props.navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          ToastAndroid.show('No user found with this email!', ToastAndroid.LONG);
        } else if (error.code === 'auth/wrong-password') {
          ToastAndroid.show('Incorrect password. Try again!', ToastAndroid.LONG);
        } else if (error.code === 'auth/invalid-email') {
          ToastAndroid.show('That email address is invalid!', ToastAndroid.LONG);
        } else {
          ToastAndroid.show('Sign-in failed. Please try again.', ToastAndroid.LONG);
        }
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Image source={require('../../../src/assets/icons/arrow-left-onboarding.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Login</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#91919F'}
              keyboardType="email-address"
              value={email}
              onChangeText={(mail) => setEmail(mail)}
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
                onChangeText={(pwd) => setPassword(pwd)}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(!passwordVisible)}>
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
            <TouchableOpacity style={styles.signInButton} onPress={userSignIn}>
              <Text style={styles.signInButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ForgetPassword')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
              <Image
                source={require('../../../src/assets/icons/flat-color-icons_google.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>Sign In with Google</Text>
            </TouchableOpacity>

            <Text style={styles.signUpRedirectText}>
              Don't have an account yet?{' '}
              <Text style={styles.signUpLink} onPress={() => props.navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

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
    gap: 90,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
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
    top: 16,
  },
  iconImage: {
    objectFit: 'contain',
    height: 24,
    width: 24,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#7F3DFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 18,
  },
  orText: {
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 15,
    color: 'gray',
  },
  signInButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    height: 56,
  },
  signInButtonText: {
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
  signUpRedirectText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
  },
  signUpLink: {
    color: '#7F3DFF',
    textDecorationLine: 'underline',
  },
});
