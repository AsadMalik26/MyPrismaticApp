import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // this is a class - container
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // alignSelf: 'center',
    backgroundColor: '#fff',
  },
  //   this is another class - blue
  blue: {
    backgroundColor: 'blue',
  },
});
