import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from '../components/MyButton';
const ScreenB = ({navigation, route}) => {
  // navigation.navigate() params has high priority than tab/Drawer Navigation initialParams
  var {itemName, itemId} = route.params;
  const navigateToA = () => {
    navigation.navigate('Home');
    // navigation.goBack();
  };
  const updateParams = () => {
    navigation.setParams({itemId: 17});
  };
  return (
    <View
      style={{
        backgroundColor: '#FFEEAF',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={styles.text}>Screen B</Text>
      <Text style={styles.message}>{itemName}</Text>
      <Text style={styles.message}>{itemId}</Text>
      <MyButton title={'Go to Screen A'} onClickHandler={navigateToA} />
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    minWidth: 100,
    textAlign: 'center',
  },
});
