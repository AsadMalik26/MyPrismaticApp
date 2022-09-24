import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerNavigation from './src/DrawerNavigation';
// import MaterialTabNavigation from './src/MaterialTabNavigation';
import MaterialTopTabNavigation from './src/MaterialTopTabNavigation';

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
      <DrawerNavigation />
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
