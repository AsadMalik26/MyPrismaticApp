import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import GlobalStyles from '../GlobalStyles';

const MyButton = ({
  onClickHandler = () => {
    console.log('default - I am null presseable');
  },
  title,
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? '#87A2FB' : '#6F38C5'},
        styles.buttonStyle,
      ]}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      android_ripple={{color: '#C6EBC5', foreground: '#367E18'}}
      onPress={onClickHandler}>
      <Text style={GlobalStyles.font}>{title}</Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
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
