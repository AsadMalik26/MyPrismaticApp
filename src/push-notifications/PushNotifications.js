import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../GlobalStyles';
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

function getFCMToken() {
  AsyncStorage.getItem('fcmToken')
    .then(result => {
      console.log('Old FCM Token ===============> ', result);
    })
    .catch(error => {
      console.log('================> Old Token Not found <===================');
      try {
        let fcmToken;
        messaging()
          .getToken()
          .then(result => {
            fcmToken = result;
            console.log('Assigned new FCM Token ===============> ', fcmToken);
            AsyncStorage.setItem('fcmToken', result);
          })
          .catch(error => {
            console.log(
              'Error assigning new FCM Token ==============> ',
              error,
            );
          });
      } catch (error) {
        console.log('Error in fcmToken=============> ', error);
      }
    });
  //
  /* if (!fcmToken) {
    console.log('Assigning new FCM Token ===============> ');

    let fcmToken = messaging().getToken();
    console.log('Assigned new FCM Token ===============> ', fcmToken);
    try {
      AsyncStorage.setItem('fcmToken', fcmToken);
    } catch (error) {
      console.log('Error in fcmToken=============> ', error);
    }
  } */
}

export const NotificationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        //    setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      //  setLoading(false);
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Notification on foreground state........', remoteMessage);
  });
};

const PushNotifications = () => {
  console.log('Push Notifications');
  useEffect(() => {
    requestUserPermission();
    getFCMToken();
    NotificationListner();
  }, []);
  return (
    <View style={{backgroundColor: '#f0f123'}}>
      <Text style={{color: '#f0f'}}>PushNotifications - See console</Text>
    </View>
  );
};
export default PushNotifications;
