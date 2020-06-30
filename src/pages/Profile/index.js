import React from 'react';
import {Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({navigation}) => {
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('login_token');
      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  let token = getData();

  if (token == null) {
    navigation.navigate('SplashScreen');
  }

  const removeValue = async () => {
    await AsyncStorage.removeItem('login_token');
    console.log('local storage cleaned');
    navigation.navigate('Landing');
  };

  return (
    <>
      <Text>My Profile</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('SplashScreen')}
      />
      <Button title="PDP" onPress={() => navigation.navigate('Pdp')} />
      <Button
        title="Categories"
        onPress={() => navigation.navigate('Categories')}
      />
      <Button title="Logout" onPress={() => removeValue()} />
    </>
  );
};

export default Profile;
