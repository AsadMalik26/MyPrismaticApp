import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Signup from './screens/Signup';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //    screenOptions={{header: () => null}}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
          options={{header: () => null}}
        />
        <Stack.Screen name="Screen_B" component={ScreenB} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Sign up'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
