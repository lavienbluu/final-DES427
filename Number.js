import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import NumButton from './NumButton';
import API from './api.js';

export default function Number({ navigation }) {
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState('');

  const changeIndex = ((value, type) => {
    API(value, type).then((result) => {
      setType(type);
      setResult(result['text']);
      console.log(result)
    })
  });

  return (
    <View style={styles.container}>
      <View style={styles.group1}>
        <Text style={styles.heading}>{'\n'}Random Number</Text>
        <Text style={styles.description}>
        {'\n'}✨ Random to find the interesting facts about numbers
        </Text>
      </View>
      <View style={styles.group2}>
        <Text style={styles.command}>{'\n'}Please enter your number</Text>
        <Text style={styles.title}>{'\n'}Example: type '42' or 'random'</Text>
        <View style={styles.buttongroup}>
          <TextInput 
            style={styles.input} 
            keyboardType="normal"
            value={value}
            onChangeText={(value) => setValue(value)} />
          <NumButton value = {value} type = 'number' onPress = {changeIndex}></NumButton>
        </View>
        <View style={styles.result}>
            <Text style={styles.resultfont}>{result}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'powderblue',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  group1: {
    flex: 1,
  },
  group2: {
    flex: 2,
  },
  buttongroup: {
    paddingBottom: 50,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    height: 40,
    weight: 30,
    borderWidth: 1
  },
  result: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  resultfont: {
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'regular',
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    height: 40,
    width: 230,
    alignItems: 'center',
    borderWidth: 1
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  },
  command: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  title: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'black'
  },
});