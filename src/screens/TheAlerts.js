import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GlobalStyles from '../GlobalStyles';

const TheAlerts = () => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const onClickHandler = () => {
    if (name.length > 3) {
      setShow(!show);
    } else {
      Alert.alert(
        'Warning',
        'Name length must be greater then 3',
        [
          {
            text: 'Do not show again',
            onPress: () => console.warn('Button pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.warn('Cancel pressed'),
          },
          {
            text: 'Ok',
            onPress: () => console.warn('OK pressed'),
          },
        ],
        {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')},
      );
    }
  };
  return (
    <View style={styles.bodyStyling}>
      <Text style={GlobalStyles.text}>
        Hello Input! This is from The Alerts
      </Text>

      <Text style={GlobalStyles.text}>What's Your name?</Text>
      <TextInput
        style={[styles.input]}
        placeholder="e.g. Asad"
        maxLength={20}
        keyboardType="default"
        editable={true}
        onChangeText={value => {
          setName(value);
        }}
        // secureTextEntry={true} //for passwords
      />
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#87A2FB' : '#6F38C5'},
          styles.buttonStyle,
        ]}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        android_ripple={{color: '#C6EBC5', foreground: '#367E18'}}
        onPress={onClickHandler}>
        <Text>{show ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      <Text style={GlobalStyles.text}>
        {show ? `Welcome ${name} to React Native` : ``}
      </Text>
    </View>
  );
};

export default TheAlerts;

const styles = StyleSheet.create({
  bodyStyling: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    margin: 2,
    padding: 2,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '50%',
    height: 30,
    marginVertical: 7,
  },
});
