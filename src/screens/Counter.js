import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../GlobalStyles';
import CustomComponent from './CustomComponent';
import StateAddition from './StateAddition';
import StateManagement from './StateManagement';

const Counter = () => {
  return (
    <View>
      <Text style={GlobalStyles.text}>
        Hello World! This is from Counter js
      </Text>
      <StateManagement />
      <Text>Counter</Text>
      <StateAddition />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  bodyStyling: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    margin: 10,
  },
});
