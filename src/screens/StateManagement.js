import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../GlobalStyles';

const StateManagement = () => {
  const [name, setName] = useState('Asad');
  const onClickHandler = () => {
    setName('Programming With Asad');
  };
  return (
    <>
      <View style={styles.bodyState}>
        <Text style={GlobalStyles.text}>{name}</Text>

        <TouchableOpacity style={styles.buttonStyle} onPress={onClickHandler}>
          <Text style={GlobalStyles.text}>Update state</Text>
        </TouchableOpacity>
        <Text style={GlobalStyles.text}>Hello world</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  bodyState: {
    //  backgroundColor: '#ffffff',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    //borderRadius: 5,
    fontSize: 20,
    //padding: 10,
    fontStyle: 'bold',
    //margin: 10,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '50%',
    height: 30,
  },
});
export default StateManagement;
