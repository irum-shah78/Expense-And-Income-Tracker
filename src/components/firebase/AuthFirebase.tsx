import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SignUp from '../../screens/signUp/SignUp';
import SignInScreen from '../../screens/signIn/SignIn';
// import { useNavigation } from '@react-navigation/native';

const AuthFirebase = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  // const navigation = useNavigation();
  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, [initializing]);

  if (initializing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7F3DFF" />
      </View>
    );
  }
  if (!user) {
    return <SignUp />;
  }
  return <SignInScreen />;
};

export default AuthFirebase;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
