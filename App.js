import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/components/Header';
import TheAlerts from './src/screens/TheAlerts';
import TheInput from './src/screens/TheInput';
import TheModels from './src/screens/TheModels';

import TheSectionList from './src/screens/TheSectionList';
import TheToasts from './src/screens/TheToasts';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/bg_image.jpg')}
      blurRadius={10}
      style={[
        styles.bodyStyling,
        {backgroundColor: '#00000030', borderRadius: 20},
      ]}>
      <Header />
      <Text>Hello World! This is from App js</Text>
      <TheModels />
    </ImageBackground>
  );
};

export default App;

const styles = StyleSheet.create({
  bodyStyling: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
    // margin: 10,
    width: '100%',
    height: '100%',
  },
});
