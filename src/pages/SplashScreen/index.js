import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from '../../asset/style';
import Stylee from './stylee';

const SplashScreen = ({navigation}) => {
  return (
    <View style={[Stylee.container, Stylee.main]}>
      <Image
        style={[Style.image, Stylee.opa]}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />

      <Text style={Style.h1}>Splash Screen</Text>
      <TouchableOpacity
        style={Style.button}
        onPress={() => navigation.navigate('Landing')}>
        <Text style={Style.buttonFont}>Click Me !</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
