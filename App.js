import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DrawerNavigation from './src/DrawerNavigation';
import StackNavigation from './src/StackNavigation';
// import MaterialTabNavigation from './src/MaterialTabNavigation';
// import MaterialTopTabNavigation from './src/MaterialTopTabNavigation';
import {Provider} from 'react-redux';
// import {store} from './src/redux/store';
import configureStore from './src/redux/store';

const store = configureStore;

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
      <Provider store={store}>
        <DrawerNavigation />
        {/* <StackNavigation /> */}
      </Provider>
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
