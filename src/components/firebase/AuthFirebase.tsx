import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import SignUp from '../../screens/signUp/SignUp';

const AuthFirebase = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    auth().onAuthStateChanged(activeUser => {
      setUser(activeUser);
      if (initializing) {
        setInitializing(false);
      }
    });
  }, [initializing]);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      // <View>
      <SignUp />
      // </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
};

export default AuthFirebase;

const styles = StyleSheet.create({});


// // src/components/firebase/AuthFirebase.tsx
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// const AuthFirebase = () => {
//   const [initializing, setInitializing] = useState<boolean>(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged((activeUser) => {
//       setUser(activeUser);
//       if (initializing) {
//         setInitializing(false);
//       }
//     });

//     return subscriber; // Unsubscribe on unmount
//   }, [initializing]);

//   if (initializing) {
//     return null; // Or a loading indicator
//   }

//   if (!user) {
//     return (
//       <View style={styles.container}>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// };

// export default AuthFirebase;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
