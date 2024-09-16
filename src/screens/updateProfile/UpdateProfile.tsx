import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const UpdateProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          setSelectedFile(uri);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../../src/assets/icons/arrow-left-onboarding.png')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Update Profile</Text>
        </View>

        <View style={styles.profilePicContainer}>
          <View style={styles.border}>
            <Image
              source={selectedFile ? { uri: selectedFile } : require('../../assets/images/profile.png')} // Conditionally render selected image
              style={styles.profilePic}
            />
          </View>
          <TouchableOpacity style={styles.editButton} onPress={handleGallery}>
            <Image
              source={require('../../assets/icons/edit.png')}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.inputContainer}>
          <Text style={styles.Text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#91919F'}
            keyboardType="email-address"
            value={email}
            onChangeText={(mail) => setEmail(mail)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.Text}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'#91919F'}
            value={name}
            onChangeText={(user) => setName(user)}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
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
    paddingHorizontal: 20,
    paddingBottom: 100,
    marginTop: 10,
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
  profilePicContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  border: {
    borderWidth: 2,
    borderRadius: 100,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingTop: 2,
    paddingRight: 2,
    borderColor: '#AD00FF',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'relative',
    zIndex: 2,
  },
  editButton: {
    position: 'absolute',
    bottom: 20,
    right: '30%',
    backgroundColor: '#F1F1FA',
    width: 36,
    height: 36,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  editIcon:{
    height: 14,
    width: 14,
  },
  inputContainer: {
    padding: 5,
  },
  Text: {
    color: '#212325',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
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
});

export default UpdateProfileScreen;
