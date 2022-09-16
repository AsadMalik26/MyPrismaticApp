import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import List from './src/screens/List';
import TheFlatList from './src/screens/TheFlatList';

const App = () => {
  return (
    <View style={styles.bodyStyling}>
      <Text>Hello World! This is from App js</Text>
      {/* <List /> */}
      <TheFlatList />
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
