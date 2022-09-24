import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../components/Header';
import MyButton from '../components/MyButton';

const LoggedIn = ({navigation}) => {
  const [name, setName] = useState('');
  const getUser = () => {
    console.log('Get effect called');
    AsyncStorage.getItem('Username').then(value => {
      if (value != null) {
        console.log('User present: ', value);
        setName(value);
      }
    });
  };
  useEffect(getUser, []);

  const update = async () => {
    if (name.length == 0) {
      Alert.alert('Warning', 'Name must not be empty');
    } else {
      try {
        await AsyncStorage.setItem('Username', name);
        Alert.alert('Updated', `Name updated: ${name}`);
      } catch (error) {
        console.log('Error occured while update');
      }
    }
  };
  return (
    <View style={styles.view}>
      <Header />
      <Text style={styles.text}>Logged In Screen</Text>
      <Text style={styles.text}>{name ? `Welcom ${name}` : ''}</Text>
      <TextInput
        placeholder="Update here"
        style={styles.theInput}
        value={name}
        onChangeText={value => setName(value)}
      />
      {/* <Text style={styles.text}>Header option disabled for this page</Text> */}
      <MyButton title={'Update'} onClickHandler={update} />
    </View>
  );
};

export default LoggedIn;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F5EDDC',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: 'DancingScript-VariableFont_wght',
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
  theInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    width: '60%',
    height: 40,
    marginVertical: 5,
    textAlign: 'center',
    color: '#181818',
  },
});
