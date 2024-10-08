// import React, { useEffect } from 'react';
// import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { login, logout } from '../../store/slices/authSlice';
// import auth from '@react-native-firebase/auth';
// import { useNavigation } from '@react-navigation/native';

// const AuthFirebase: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const navigation = useNavigation();
//   const { loading } = useAppSelector((state) => state.auth);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((activeUser) => {
//       if (activeUser) {
//         dispatch(login(activeUser));
//         navigation.navigate('Home');
//       } else {
//         dispatch(logout());
//         navigation.navigate('SignIn');
//       }
//     });

//     return unsubscribe;
//   }, [dispatch, navigation]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#7F3DFF" />
//       </View>
//     );
//   }

//   return null;
// };

// export default AuthFirebase;

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// import React, { useEffect } from 'react';
// import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { login, logout } from '../../store/slices/authSlice';
// import auth from '@react-native-firebase/auth';
// import { NavigationProp } from '@react-navigation/native';

// type AuthFirebaseProps = {
//   navigation: NavigationProp<any>;
// };

// const AuthFirebase: React.FC<AuthFirebaseProps> = (props) => {
//   const dispatch = useAppDispatch();
//   const { loading } = useAppSelector((state) => state.auth);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((activeUser) => {
//       if (activeUser) {
//         dispatch(login(activeUser));
//         props.navigation.navigate('Home');
//       } else {
//         dispatch(logout());
//         props.navigation.navigate('SignIn');
//       }
//     });

//     return unsubscribe;
//   }, [dispatch, props.navigation]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#7F3DFF" />
//       </View>
//     );
//   }

//   return null;
// };

// export default AuthFirebase;

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import React, { useEffect } from 'react';
// import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { login, logout } from '../../store/slices/authSlice';
// import auth from '@react-native-firebase/auth';
// import { NavigationProp } from '@react-navigation/native';

// type AuthFirebaseProps = {
//   navigation: NavigationProp<any>;
// };

// const AuthFirebase: React.FC<AuthFirebaseProps> = (props) => {
//   const dispatch = useAppDispatch();
//   const { loading, isAuthenticated } = useAppSelector((state) => state.auth);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((activeUser) => {
//       if (activeUser) {
//         dispatch(login(activeUser));
//         props.navigation.navigate('Home');
//       } else {
//         dispatch(logout());
//         props.navigation.navigate('SignIn');
//       }
//     });

//     return unsubscribe;
//   }, [dispatch, props.navigation]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#7F3DFF" />
//       </View>
//     );
//   }

//   return null;
// };

// export default AuthFirebase;

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// import React, { useEffect } from 'react';
// import { StyleSheet, View, ActivityIndicator } from 'react-native';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { login, logout } from '../../store/slices/authSlice';
// import auth from '@react-native-firebase/auth';
// import { NavigationProp } from '@react-navigation/native';

// type AuthFirebaseProps = {
//   navigation: NavigationProp<any>;
// };

// const AuthFirebase: React.FC<AuthFirebaseProps> = (props) => {
//   const dispatch = useAppDispatch();
//   const { loading } = useAppSelector((state) => state.auth);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       if (user) {
//         dispatch(login(user));
//         props.navigation.navigate('MainTabs'); // Navigate to MainTabs after login
//       } else {
//         dispatch(logout());
//         props.navigation.navigate('SignIn'); // Navigate to SignIn if no user
//       }
//     });

//     return unsubscribe;
//   }, [dispatch, props.navigation]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#7F3DFF" />
//       </View>
//     );
//   }

//   return null;
// };

// export default AuthFirebase;

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login, logout } from '../../store/slices/authSlice';
import auth from '@react-native-firebase/auth';
import { NavigationProp } from '@react-navigation/native';

type AuthFirebaseProps = {
  navigation: NavigationProp<any>;
};

const AuthFirebase: React.FC<AuthFirebaseProps> = (props) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Check user authentication state on component mount
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user));
        props.navigation.navigate('MainTabs');
      } else {
        dispatch(logout());
        props.navigation.navigate('SignIn');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, props.navigation]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7F3DFF" />
      </View>
    );
  }

  return null;
};

export default AuthFirebase;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
