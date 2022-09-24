import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import MyButton from '../components/MyButton';

const ScreenA = ({navigation}) => {
  const navigateToB = () => {
    navigation.navigate('Screen_B');
    // navigation.replace('Screen_B');
  };
  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };
  const toggledrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.view}>
      <Header />
      <Text style={styles.text}>Screen A</Text>
      {/* <Text style={styles.text}>Header option disabled for this page</Text> */}
      <MyButton title={'Go to Screen B'} onClickHandler={navigateToB} />
      <MyButton title={'Sign Up here'} onClickHandler={navigateToSignup} />
      <MyButton title={'toggle drawer'} onClickHandler={toggledrawer} />
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F5EDDC',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
});
