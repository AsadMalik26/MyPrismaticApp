import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';

const Signup = ({navigation}) => {
  const goback = () => {
    // navigation.navigate('Home');
    navigation.goBack();
  };
  return (
    <View style={styles.theView}>
      <Text style={styles.theHeading}>Signup</Text>
      <TextInput
        placeholderTextColor={'#181818'}
        style={styles.theInput}
        placeholder="First Name"
      />
      <TextInput
        placeholderTextColor={'#181818'}
        style={styles.theInput}
        placeholder="Last Name"
      />
      <TextInput
        placeholderTextColor={'#181818'}
        style={styles.theInput}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        placeholderTextColor={'#181818'}
        style={styles.theInput}
        placeholder="Phone no."
        keyboardType="number-pad"
      />
      <TextInput
        placeholderTextColor={'#181818'}
        style={styles.theInput}
        secureTextEntry={true}
        placeholder="Password"
        // keyboardType="visible-password"
      />
      <TextInput
        placeholderTextColor={'#181818'}
        style={styles.theInput}
        secureTextEntry={true}
        placeholder="Repeat Password"
        // keyboardType="visible-password"
      />
      {/* <TouchableOpacity
        onPress={goback}
        style={{
          backgroundColor: '#000000',
          width: 100,
          height: 30,
          padding: 5,
          margin: 5,
        }}>
        <Text style={{color: 'yellow', textAlign: 'center'}}>Go back</Text>
      </TouchableOpacity> */}
      <MyButton title={'Go to Home'} onClickHandler={goback} />
    </View>
  );
};
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
    width: '70%',
    height: 40,
    marginVertical: 5,
    textAlign: 'center',
    color: '#181818',
  },
});
export default Signup;
