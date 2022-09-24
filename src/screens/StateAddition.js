import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../GlobalStyles';

const StateAddition = () => {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setSum(sum + 5);
    setCount(count + 1);
    console.log('Addition Done');
  };
  return (
    <View style={styles.bodyState}>
      <Text style={GlobalStyles.text}>{sum}</Text>

      <TouchableOpacity style={styles.buttonStyle} onPress={onClickHandler}>
        <Text style={GlobalStyles.text}>Add</Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.text}>You clicked {count} times</Text>
    </View>
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
export default StateAddition;
