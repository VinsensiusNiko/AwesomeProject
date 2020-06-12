import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import Style from './style';

const FirstLast = ({callbackFirst}) => {
  //   const [firstname, setFirstname] = useState('');
  //   const [lastname, setLastname] = useState('');

  //   useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Text style={Style.h1}>DAFTAR BIODATA</Text>
      <View style={Style.form}>
        <Text style={Style.label}>Nama Awal</Text>
        <TextInput
          style={Style.field}
          placeholder="Firstname..."
          onChangeText={text => callbackFirst(text)}
        />
        <Text style={Style.label}>Nama Akhir</Text>
        <TextInput
          style={Style.field}
          placeholder="Lastname..."
          onChangeText={text => callbackFirst(text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstLast;
