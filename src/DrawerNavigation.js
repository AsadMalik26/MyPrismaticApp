import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import ScreenA from './screens/ScreenA';
import Signup from './screens/Signup';
import ScreenB from './screens/ScreenB';
import Counter from './screens/Counter';
import FlatListComponent from './screens/FlatListComponent';
import List from './screens/List';
import TheAlerts from './screens/TheAlerts';
import Login from './screens/Login';
import LoggedIn from './screens/LoggedIn';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        // hideStatusBar={true}
        edgeWidth={100}
        screenOptions={{
          headerShown: true,
          // swipeEnabled: false,
          // gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#35425930'},
          // headerTintColor: '#D2001A',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '800',
          },
          headerTitleAllowFontScaling: true,
        }}
        drawerStyle={{width: 220}}
        drawerType={'slide'}
        overlayColor="#35425970"
        // overlay is when drawer open and the remaining screen color
      >
        {/* screens */}
        <Drawer.Screen
          name="Home"
          component={ScreenA}
          options={{
            drawerIcon: ({color, size, focused}) => (
              <FontAwesome5
                name="autoprefixer"
                color={focused ? '#D2001A' : '#D8D8D8'}
                size={focused ? 25 : 18}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            drawerIcon: ({color, size, focused}) => (
              <FontAwesome5
                name="btc"
                color={focused ? '#D2001A' : '#D8D8D8'}
                size={focused ? 25 : 18}
              />
            ),
          }}
          initialParams={{
            itemName: 'Item From Drawer',
            itemId: 14,
          }}
        />
        <Drawer.Screen
          name="Signup"
          component={Signup}
          options={{
            drawerIcon: ({color, size, focused}) => (
              <FontAwesome5
                name="user-plus"
                color={focused ? '#D2001A' : '#D8D8D8'}
                size={focused ? 25 : 18}
              />
            ),
          }}
        />
        <Drawer.Screen name="Counter" component={Counter} />
        <Drawer.Screen name="FlatListComponent" component={FlatListComponent} />
        <Drawer.Screen name="List" component={List} />
        <Drawer.Screen name="TheAlerts" component={TheAlerts} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="LoggedIn" component={LoggedIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
