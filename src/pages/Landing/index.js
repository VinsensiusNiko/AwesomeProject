import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Style from '../../asset/style';
import Stylee from '../SplashScreen/stylee';
import {mutate} from '../../services/graphql/api';
import {gql} from 'apollo-boost';

import AsyncStorage from '@react-native-community/async-storage';

const Landing = ({navigation}) => {
  const getToken = async key => {
    console.log('Get Token: ' + key);
    return await AsyncStorage.getItem(key);
  };

  const cekToken = async () => {
    let tokenResult = await getToken('login_token');
    console.log('Get Token result: ' + JSON.stringify(tokenResult));
    if (tokenResult !== null) {
      navigation.navigate('Profile');
    }
  };
  cekToken();

  const [username, setUsername] = useState('tomo@icube.us');
  const [password, setPassword] = useState('Admin123');
  // const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  // const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);

  const setToken = async (key, value) => {
    console.log('Set Token: ' + value);
    return await AsyncStorage.setItem(key, value);
  };

  const postLogin = () => {
    let schema = gql`
      mutation generateCustomerTokenCustom($email: String!, $pass: String!) {
        generateCustomerTokenCustom(username: $email, password: $pass) {
          token
        }
      }
    `;

    let params = {email: username, pass: password};

    mutate(schema, params).then(res => {
      const {data} = res;
      const user = data.generateCustomerTokenCustom;
      console.log(user.token);
      if (user.token) {
        setToken('login_token', user.token);
        navigation.navigate('Profile');
      }
    });
  };

  return (
    <SafeAreaView style={[Stylee.container, Stylee.main]}>
      <ScrollView>
        <Text style={Style.h1}>Login Page</Text>
        <View style={Style.form}>
          <Text style={Style.label}>Email</Text>
          <TextInput
            style={Style.field}
            value="tomo@icube.us"
            placeholder="e.g user@gmail.com"
            onChangeText={text => {
              setUsername(text);
            }}
          />
          <Text style={Style.label}>Password</Text>
          <TextInput
            style={Style.field}
            value="Admin123"
            placeholder="password..."
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <TouchableOpacity style={Style.button} onPress={postLogin}>
            <Text style={Style.buttonFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Landing;
