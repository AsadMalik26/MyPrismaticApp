import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './screens/ScreenA';
import Signup from './screens/Signup';
const Tab = createBottomTabNavigator();
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TabNavigation = () => {
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
            } else if (route.name === 'Signup') {
              iconName = 'btc';
              size = focused ? 22 : 15;
              // color = focused ? '#D2001A' : '#D8D8D8';
            }
            return <FontAwesome5 name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#D2001A',
          inactiveTintColor: '#D8D8D8',
          activeBackgroundColor: '#5CB8E4',
          inactiveBackgroundColor: '#CDF0EA',
          // showLabel: false,
          labelStyle: {fontSize: 14},
        }}>
        {/* screens */}
        <Tab.Screen
          name="Home"
          component={ScreenA}
          options={{tabBarBadge: 1}}
        />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
