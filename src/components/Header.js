import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native with Asad</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFF5E490',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#00000090',
    textAlign: 'center',
  },
});
