import React from 'react';
import {
  Text,
  TouchableOpacity,
  Keyboard
} from 'react-native';

const NumButton = (props) => {
  return(
    <TouchableOpacity 
      style={{
        backgroundColor: 'black',
        padding: 10,
        height: 40,
        weight: 30,
        borderWidth: 1
      }}
      onPress={()=>{
        props.onPress(props.value, props.type);
        Keyboard.dismiss();
      }}
    >
      <Text style={{color: 'white'}}>Ok</Text>
    </TouchableOpacity>
    );
  };

export default NumButton;
