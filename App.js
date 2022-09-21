import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StackNavigation from './src/StackNavigation';
function TheScreen() {
  return (
    <View
      style={{
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'red',
          alignSelf: 'center',
        }}>
        The Screen
      </Text>
    </View>
  );
}
const App = () => {
  return (
    <>
      {/* <ImageBackground
        source={require('./assets/bg_image.jpg')}
        blurRadius={10}
        style={[
          styles.bodyStyling,
          {backgroundColor: '#00000030', borderRadius: 20},
        ]}>
        <Header />
      </ImageBackground> */}
      <View>
        <Text>This is App.js file</Text>
      </View>
      <StackNavigation />
    </>
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
