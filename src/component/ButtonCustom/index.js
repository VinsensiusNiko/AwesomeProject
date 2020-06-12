import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Style from '../../asset/style';

const ButtonCustom = ({type}) => {
  return (
    <>
      <TouchableOpacity style={Style.button}>
        <Text style={[Style.font, Style.buttonFont]}>{type}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonCustom;
