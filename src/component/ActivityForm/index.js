import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from '../../asset/style';
import StyleAct from './styleAct';

const ActivityForm = ({dataActivity}) => {
  const [Activity, setActivity] = useState('');
  const [Status, setStatus] = useState('');

  const handleSubmit = () => {
    const data = {Activity, Status};
    dataActivity(data);
  };

  return (
    <View>
      <Text style={Style.h1}>---Create Your Activities---</Text>
      <Text style={Style.label}>Activity</Text>
      <TextInput
        placeholder="e.g football, reading, swimming..."
        onChangeText={text => setActivity(text)}
        style={StyleAct.form}
      />
      <Text style={Style.label}>Status Now</Text>
      <TextInput
        placeholder="e.g Start, Stop..."
        onChangeText={text => setStatus(text)}
        style={StyleAct.form}
      />
      <TouchableOpacity onPress={() => handleSubmit()} style={Style.button}>
        <Text style={[Style.font, Style.buttonFont]}>Submit</Text>
      </TouchableOpacity>
      {/* <Text>{Activity}</Text>
      <Text>{Status}</Text> */}
    </View>
  );
};

export default ActivityForm;
