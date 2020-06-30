import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {mutate} from '../../services/graphql/api';
import Style from '../../component/FirstLast/style';
import {gql} from 'apollo-boost';
import {useAsyncStorage} from '@react-native-community/async-storage';

const Home = ({navigation}) => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [password, setPassword] = useState(Platform.OS === 'ios' ? '' : null);

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
    });
  };

  return (
    <>
      <SafeAreaView>
        <Text style={Style.h1}>DAFTAR BIODATA</Text>
        <View style={Style.form}>
          <Text style={Style.label}>Username</Text>
          <TextInput
            style={Style.field}
            placeholder="Firstname..."
            onChangeText={text => setUsername(text)}
          />
          <Text style={Style.label}>Password</Text>
          <TextInput
            style={Style.field}
            placeholder="Lastname..."
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity style={Style.button} onPress={postLogin}>
            <Text style={[Style.font, Style.buttonFont]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Check Storage</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* <Button
        title="Go to Jane's Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
    </>
  );
};

export default Home;
