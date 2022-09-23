import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ScreenA from './screens/ScreenA';
import Signup from './screens/Signup';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenB from './screens/ScreenB';
const Tab = createMaterialTopTabNavigator();

const MaterialTopTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'autoprefixer';
              size = focused ? 22 : 15;
              // color = focused ? '#D2001A' : '#D8D8D8';
            } else if (route.name === 'Screen_B') {
              iconName = 'btc';
              size = focused ? 22 : 15;
              // color = focused ? '#D2001A' : '#D8D8D8';
            } else if (route.name === 'Signup') {
              iconName = 'user-plus';
              size = focused ? 22 : 15;
              // color = focused ? '#D2001A' : '#D8D8D8';
            }
            return <FontAwesome5 name={iconName} color={color} size={size} />;
          },
        })}
        activeColor="#FFD24C"
        inactiveColor="#FFD24C60"
        barStyle={{backgroundColor: '#35425980'}}>
        {/* screens */}
        <Tab.Screen
          name="Home"
          component={ScreenA}
          options={{tabBarBadge: 1}}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Sign up'}}
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
          options={{title: 'Screen B'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MaterialTopTabNavigation;

const styles = StyleSheet.create({});
