import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {initializeApp} from 'firebase/app';
import {getFirestore, getDoc, collection} from 'firebase/firebase-firestore';
// import * as f from 'firebase';
import {firebaseConfig} from '../../Config';

//init firebase
const app = initializeApp(firebaseConfig);

// if (!firebaseObj.apps.length) {
//   firebaseObj.initializeApp(firebaseConfig);
// }

//init services
// const db = getFirestore();

// collection ref
// const colRef = collection(db, 'Movies');

// getDoc(colRef).then(snapshot => {
//   // console.log(snapshot.docs);
//   console.log('Data fetch?');
// });

const DbTest = () => {
  return (
    <View>
      <Text>DbTest</Text>
    </View>
  );
};

export default DbTest;

const styles = StyleSheet.create({});
