import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cat from './Cat';
import StateManagement from './src/screens/StateManagement';
import CustomComponent from './src/screens/CustomComponent';
import StateAddition from './src/screens/StateAddition';
const App = () => {
  return (
    <View style={styles.bodyStyling}>
      <Text>Hello World! This is from App js</Text>
      <CustomComponent />
      <StateManagement />
      <Text>Counter</Text>
      <StateAddition />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  bodyStyling: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    margin: 10,
  },
});
