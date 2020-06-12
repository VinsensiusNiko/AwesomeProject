import React from 'react';
import {Text, View} from 'react-native';
import StyleAct from './styleAct';

const ActivityList = ({ListActivity}) => {
  console.log(ListActivity);
  return (
    <View>
      {ListActivity.map(data => (
        <View style={StyleAct.result}>
          <Text style={StyleAct.h6}>
            {data.Activity} = {data.Status}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ActivityList;
