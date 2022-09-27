import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../components/MyButton';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const login = async () => {
    if (name.length < 3) {
      Alert.alert('Alert', 'Name should at least 4 character long', [
        {
          text: 'Ok',
          onPress: () => console.warn('Ok pressed'),
        },
      ]);
      return;
    } else {
      try {
        let user = {
          name: name,
          age: age,
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('LoggedIn');
      } catch (error) {
        console.log('Error occured while login=============>', error);
      }
    }
  }; // end login

  const getUser = () => {
    console.log('Log in - Get effect called');
    AsyncStorage.getItem('UserData').then(value => {
      if (value != null) {
        let user = JSON.parse(value);
        console.log('User present: ', user.name, user.age);
        navigation.navigate('LoggedIn');
      }
    });
  };
  useEffect(getUser, []);

  return (
    <View style={styles.theView}>
      <View>
        <Text style={styles.theHeading}>Login Page</Text>
      </View>
      <View style={{width: '70%'}}>
        <TextInput
          placeholderTextColor={'#181818'}
          style={styles.theInput}
          placeholder="First Name"
          onChangeText={value => setName(value)}
        />
        <TextInput
          placeholderTextColor={'#181818'}
          style={styles.theInput}
          placeholder="age"
          // secureTextEntry={true}
          keyboardType="numeric"
          onChangeText={value => setAge(value)}
        />
        <MyButton title={'Login'} onClickHandler={login} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  theView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEEAF',
    color: 'yellow',
  },
  theHeading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    width: '100%',
    backgroundColor: '',
  },
  theInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    width: '100%',
    height: 40,
    marginVertical: 5,
    textAlign: 'center',
    color: '#181818',
  },
});
