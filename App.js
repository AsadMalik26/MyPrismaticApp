import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TheAlerts from './src/screens/TheAlerts';
import TheInput from './src/screens/TheInput';

import TheSectionList from './src/screens/TheSectionList';
import TheToasts from './src/screens/TheToasts';

const App = () => {
  return (
    <View style={styles.bodyStyling}>
      <Text>Hello World! This is from App js</Text>
      {/* <TheAlerts /> */}
      <TheToasts />
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
