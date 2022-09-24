import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyButton from '../components/MyButton';
import GlobalStyles from '../GlobalStyles';
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
      <Text style={[GlobalStyles.font, styles.text]}>Screen B</Text>
      <Text style={[styles.message, GlobalStyles.font]}>{itemName}</Text>
      <Text style={[styles.message, GlobalStyles.font]}>{itemId}</Text>
      <MyButton title={'Go to Screen A'} onClickHandler={navigateToA} />
    </View>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'red',
    alignSelf: 'center',
  },
  message: {
    fontSize: 16,
    // fontWeight: 'bold',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    minWidth: 100,
    color: 'black',
    textAlign: 'center',
  },
});
