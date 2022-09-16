import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import List from './src/screens/List';
import TheFlatList from './src/screens/TheFlatList';
import TheSectionList from './src/screens/TheSectionList';

const App = () => {
  return (
    <View style={styles.bodyStyling}>
      <Text>Hello World! This is from App js</Text>
      {/* <TheFlatList /> */}
      {/* <List /> */}
      <TheSectionList />
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
