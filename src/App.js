import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Style from './asset/style';

const App = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Image
        style={Style.image}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text style={Style.h1}>LOGIN YUK !</Text>
      <View style={Style.form}>
        <Text style={[Style.label, Style.font]}>Username</Text>
        <TextInput style={Style.field} placeholder="Username..." />
        <Text style={[Style.label, Style.font]}>Password</Text>
        <TextInput
          style={Style.field}
          secureTextEntry={true}
          placeholder="Password..."
        />
        <TouchableOpacity style={Style.button}>
          <Text style={[Style.font, Style.buttonFont]}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
