// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const AddExpense = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image
//             source={require('../../../src/assets/icons/arrowleft.png')}
//             style={styles.backIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Expense</Text>
//       </View>

//       {/* Expense Input Section */}
//       <View style={styles.amountContainer}>
//         <Text style={styles.amountLabel}>How much?</Text>
//         <Text style={styles.amountValue}>$0</Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <TouchableOpacity style={styles.inputField}>
//           <Text style={styles.placeholderText}>Category</Text>
//           <Text style={styles.dropdownIcon}>⌄</Text>
//         </TouchableOpacity>
//         <TextInput
//           style={styles.inputField}
//           placeholder="Description"
//           placeholderTextColor="#B0B0B0"
//         />

//         <TouchableOpacity style={styles.attachmentButton}>
//           <Text style={styles.attachmentIcon}>📎</Text>
//           <Text style={styles.attachmentText}>Add attachment</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.continueButton}>
//         <Text style={styles.continueButtonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FD3C4A',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     gap: 90,
//   },
//   backButton: {
//     marginRight: 20,
//   },
//   backIcon: {
//     objectFit: 'contain',
//   },
//   backButtonText: {
//     fontSize: 24,
//     color: '#fff',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   amountContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     marginHorizontal: 25,
//   },
//   amountLabel: {
//     fontSize: 18,
//     color: '#FCFCFC',
//     marginBottom: 10,
//   },
//   amountValue: {
//     fontSize: 64,
//     color: '#FCFCFC',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     padding: 20,
//     paddingTop: 40,
//   },
//   inputField: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderColor: '#E0E0E0',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   placeholderText: {
//     color: '#B0B0B0',
//     fontSize: 16,
//   },
//   dropdownIcon: {
//     color: '#B0B0B0',
//     fontSize: 18,
//   },
//   attachmentButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#E0E0E0',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 30,
//   },
//   attachmentIcon: {
//     color: '#B0B0B0',
//     fontSize: 18,
//     marginRight: 10,
//   },
//   attachmentText: {
//     color: '#B0B0B0',
//     fontSize: 16,
//   },
//   continueButton: {
//     backgroundColor: '#7F3DFF',
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginHorizontal: 20,
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default AddExpense;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddExpense = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../../src/assets/icons/arrowleft.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Expense</Text>
      </View>

      {/* Expense Input Section */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>How much?</Text>
        <Text style={styles.amountValue}>$0</Text>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.inputField}>
          <Text style={styles.placeholderText}>Category</Text>
          <Text style={styles.dropdownIcon}>⌄</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputField}
          placeholder="Description"
          placeholderTextColor="#B0B0B0"
        />
        <TouchableOpacity style={styles.attachmentButton}>
          <Text style={styles.attachmentIcon}>📎</Text>
          <Text style={styles.attachmentText}>Add attachment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.whiteBackground}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD3C4A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 90,
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
  amountContainer: {
    flex: 2,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  amountLabel: {
    fontSize: 18,
    color: '#FCFCFC',
    marginBottom: 10,
  },
  amountValue: {
    fontSize: 64,
    color: '#FCFCFC',
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 0,
    paddingTop: 40,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  placeholderText: {
    color: '#B0B0B0',
    fontSize: 16,
  },
  dropdownIcon: {
    color: '#B0B0B0',
    fontSize: 18,
  },
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  attachmentIcon: {
    color: '#B0B0B0',
    fontSize: 18,
    marginRight: 10,
  },
  attachmentText: {
    color: '#B0B0B0',
    fontSize: 16,
  },
  whiteBackground: {
    backgroundColor: '#fff',
    padding: 20,
  },
  continueButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddExpense;
