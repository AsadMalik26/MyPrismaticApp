import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {initializeApp} from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from 'firebase/firestore';
// import * as f from 'firebase';
import {firebaseConfig} from '../../Config';

const firebaseSetup = async () => {
  console.log('================>Init firebase<=======================');
  //init firebase
  const app = await initializeApp(firebaseConfig);

  console.log('================>Init services<=======================');
  //init services
  const db = await getFirestore(app);

  console.log('================>collection ref<=======================');
  // collection ref
  const colRef = await collection(db, 'Movies');

  console.log(
    '================>collection ref=======================>',
    colRef,
  );

  console.log('================>Data Reading<=======================');
  // read data
  getDocs(colRef)
    .then(snapshot => {
      // console.log(snapshot.docs);
      console.log('Data fetch?=========>', snapshot._snapshot);
    })
    .catch(error => {
      console.log('Error fetching============> ', error);
    });
};
firebaseSetup();
// read data
// getDocs(colRef)
//   .then(snapshot => {
//     // console.log(snapshot.docs);
//     console.log('Data fetch?=========>', snapshot.docs);
//   })
//   .catch(error => {
//     console.log('Error fetching============> ', error);
//   });

// read data 2
// const get = async () => {
//   console.log('================>fetching data<=======================');
//   const docsSnap = await getDocs(colRef);
//   docsSnap.forEach(doc => {
//     console.log('================>fetched data<=======================');
//     console.log(doc.data);
//   });
//   console.log('================>end fetching data<=======================');

// querySnapshot.forEach(doc => {
//   console.log('================>printing data<=======================');
//   console.log(`${doc.id} => ${doc}`);
// });
// };
// get();

// add data
// import {collection, addDoc} from 'firebase/firestore';

// try {
//   const docRef = await addDoc(colRef, {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }
// end add data
// Add a second document with a generated ID.
// import {addDoc, collection} from 'firebase/firestore';

// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Alan',
//     middle: 'Mathison',
//     last: 'Turing',
//     born: 1912,
//   });

//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }
// end add second record

// Allow read/write access on all documents to any user signed in to the application
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

// add
// const citiesRef = collection(db, 'cities');
// const addData = async () => {
//   console.log('================> Adding Data <=======================');
//   await setDoc(doc(citiesRef, 'SF'), {
//     name: 'San Francisco',
//     state: 'CA',
//     country: 'USA',
//     capital: false,
//     population: 860000,
//     regions: ['west_coast', 'norcal'],
//   });
//   await setDoc(doc(citiesRef, 'LA'), {
//     name: 'Los Angeles',
//     state: 'CA',
//     country: 'USA',
//     capital: false,
//     population: 3900000,
//     regions: ['west_coast', 'socal'],
//   });
//   await setDoc(doc(citiesRef, 'DC'), {
//     name: 'Washington, D.C.',
//     state: null,
//     country: 'USA',
//     capital: true,
//     population: 680000,
//     regions: ['east_coast'],
//   });
//   await setDoc(doc(citiesRef, 'TOK'), {
//     name: 'Tokyo',
//     state: null,
//     country: 'Japan',
//     capital: true,
//     population: 9000000,
//     regions: ['kanto', 'honshu'],
//   });
//   await setDoc(doc(citiesRef, 'BJ'), {
//     name: 'Beijing',
//     state: null,
//     country: 'China',
//     capital: true,
//     population: 21500000,
//     regions: ['jingjinji', 'hebei'],
//   });
// };

// addData();
const DbTest = () => {
  return (
    <View>
      <Text>DbTest</Text>
    </View>
  );
};

export default DbTest;

const styles = StyleSheet.create({});
