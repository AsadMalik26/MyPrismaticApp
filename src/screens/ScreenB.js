import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from '../components/MyButton';
const ScreenB = ({navigation}) => {
  const navigateToA = () => {
    navigation.navigate('Home');
    // navigation.goBack();
  };
  return (
    <View
      style={{
        backgroundColor: '#FFEEAF',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'red',
          alignSelf: 'center',
        }}>
        Screen B
      </Text>
      <MyButton title={'Go to Screen A'} onClickHandler={navigateToA} />
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({});
