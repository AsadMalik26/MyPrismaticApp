import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../components/Header';
import MyButton from '../components/MyButton';

const LoggedIn = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  // dispatch(admin('faisal'));
  const getUser = () => {
    console.log('Logged in - Get effect called');
    AsyncStorage.getItem('UserData').then(value => {
      console.log('Logged-in Value found: ', value);
      if (value != null) {
        let user = JSON.parse(value);
        console.log('User present: ', user.name, user.age);
        setName(user.name);
        setAge(user.age);
      } else console.log('Value not found============>', value);
    });
    // dispatch(setName(name));
    //dispatch(setAge(age));
  };
  useEffect(getUser, []);

  const update = () => {
    if (name.length == 0) {
      Alert.alert('Warning', 'Name must not be empty');
    } else {
      try {
        let user = {
          name: name,
        };
        AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        Alert.alert('Updated', `Updated: ${user}`);
      } catch (error) {
        console.log('Error occured while update');
      }
    }
  };
  const logout = () => {
    try {
      AsyncStorage.removeItem('UserData', res => {
        console.log('Removed? or removed error?', res);
      });
      navigation.navigate('Login');
    } catch (error) {
      console.log('============>Logout Error');
      // pop to route view constroller in react native
      // what about in tab navigation?
    }
  };
  return (
    <View style={styles.view}>
      <Header />
      <Text style={styles.text}>Logged In Screen</Text>
      <Text style={styles.text}>{name ? `Welcom ${name}` : ''}</Text>
      <Text style={styles.text}>{age ? `Your age is ${age}` : ''}</Text>
      {/* <Text style={styles.text}>Welcome {name}</Text> */}
      {/* <Text style={styles.text}>Your age is {age}</Text> */}
      <TextInput
        placeholder="Update here"
        style={styles.theInput}
        value={name}
        onChangeText={value => dispatch(setName(value))}
      />
      {/* <Text style={styles.text}>Header option disabled for this page</Text> */}
      <MyButton title={'Update'} onClickHandler={update} />

      <MyButton title={'Logout User'} onClickHandler={logout} />
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
