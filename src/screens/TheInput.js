import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TheInput = () => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  return (
    <View style={styles.bodyStyling}>
      <Text style={styles.text}>Hello Input! This is from The Input</Text>

      <Text style={styles.text}>What's Your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Asad"
        maxLength={20}
        keyboardType="default"
        editable={true}
        onChangeText={value => {
          setName(value);
          setShow(true);
        }}
        // secureTextEntry={true} //for passwords
      />

      <Text style={styles.text}>
        {show ? `Welcome ${name} to React Native` : ``}
      </Text>
    </View>
  );
};

export default TheInput;

const styles = StyleSheet.create({
  bodyStyling: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    margin: 2,
    padding: 2,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});
