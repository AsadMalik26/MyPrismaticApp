import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import MyButton from '../components/MyButton';

const ScreenA = ({navigation}) => {
  const navigateToB = () => {
    navigation.navigate('Screen_B', {
      itemName: 'Item From Screen A',
      itemId: 14,
    });
    // navigation.replace('Screen_B');
  };
  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };
  const toggledrawer = () => {
    navigation.toggleDrawer();
  };
  const [name, setName] = useState('');
  const getUser = async () => {
    await AsyncStorage.getItem('Username').then(value => {
      if (value != null) {
        console.log('User present: ', value);
        setName(value);
      }
    });
  };
  useEffect(getUser, []);
  return (
    <View style={styles.view}>
      <Header />
      <Text style={styles.text}>Screen A</Text>
      <Text style={styles.text}>{name ? `Welcom ${name}` : ''}</Text>
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
    fontFamily: 'DancingScript-VariableFont_wght',
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
});
