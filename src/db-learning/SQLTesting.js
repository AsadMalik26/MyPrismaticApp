import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import MyButton from '../components/MyButton';
import GlobalStyles from '../GlobalStyles';
// import {PrismaClient as pr} from '../../database/generated/sqliteClient1';
// const prisma = new PrismaClient();
// console.log(pr);

const db = SQLite.openDatabase(
  // 1. database specifications
  {
    name: 'SQLiteDB',
    location: 'default',
  },
  // success function
  success => {
    console.log('SQLite Database opened ', success);
  },
  // error function
  error => {
    console.log('SQLite database error ', error);
  },
);
const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'Users ' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);',
      () => {
        console.log('Table created');
        Alert.alert('Sucess!', 'You data in db table is created', {
          text: 'Ok',
          onPress: () => {
            // console.warn('OK pressed')
          },
        });
      },
      error => {
        console.log('Table already exist or any error occured: ', error);
      },
    );
  });
};

const insertData = (name, age) => {
  try {
    console.log('Inserting============> ', name, age);
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Users (Name, Age) VALUES (?,?)', [name, age]);
    });
    console.log('============> Inserted');
  } catch (error) {
    console.log('INSERTION ERROR ==========> ', error);
  }
};

const updateName = name => {
  try {
    db.transaction(tx => {
      tx.executeSql('UPDATE Users SET Name=?'[name], () => {
        Alert.alert('Sucess!', 'You data in db is updated', {
          text: 'Ok',
          onPress: () => {
            // console.warn('OK pressed')
          },
        });
      });
    });
  } catch (error) {
    console.log('INSERTION ERROR ==========> ' + error);
  }
};
const deleteData = (name, age) => {
  try {
    db.transaction(tx => {
      console.log('Deleting=================> ', tx);
      tx.executeSql(
        'DELETE FROM Users',
        [],
        success => {
          Alert.alert('Sucess!', 'You data in db is deleted', {
            text: 'Ok',
            onPress: () => {
              // console.warn('OK pressed')
            },
          });
          fetchData();
        },
        error => {
          console.log('ERROR Data DELETE ' + error);
        },
      );
      console.log('=================> Deleted');
    });
  } catch (error) {
    console.log('DELETION ERROR ==========> ', error);
  }
};

const SQLTesting = () => {
  const [data, setData] = useState('Dummy');
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const fetchData = () => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT Name, Age FROM Users', [], (tx, results) => {
          var len = results.rows.length;
          console.log('Fetch results============> ', results);
          if (len > 0) {
            var userName = results.rows.item(0).Name;
            var userAge = results.rows.item(0).Age;
            setName(userName);
            setAge(userAge);
          }
        });
      });
    } catch (error) {
      console.log('INSERTION ERROR ==========> ' + error);
    }
  };
  useEffect(fetchData, []);
  //   const getData = async () => {
  //     console.log('Get effect called');
  //     const users = await prisma.user.findMany();
  //     console.log('Found users');
  //     console.log('DB Response ================> ', users);
  //     // setData(JSON.stringify(users));
  //   };
  //   useEffect(getData, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f0f898',
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View class={'heading'} style={[styles.heading]}>
          <Text style={[GlobalStyles.font, styles.headingText]}>
            SQL Testing
          </Text>
        </View>
        <View class={'content'} style={[{borderWidth: 1, width: '70%'}]}>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              {`Name: ${name}\nAge: ${age}`}
            </Text>
          </View>
        </View>
        {/* <View class={'content'} style={[{borderWidth: 1, width: '70%'}]}>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              {`Admin: ${adminName}`}
            </Text>
          </View>
        </View> */}
        <View class={'buttons'}>
          <MyButton
            title={'Create Table'}
            onClickHandler={createTable}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
          <MyButton
            title={'Insert Data'}
            onClickHandler={() => {
              insertData('Muhammad Asad Saeed', 21);
            }}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
          <MyButton
            title={'Fetch Data'}
            onClickHandler={fetchData}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
          <MyButton
            title={'Delete Data'}
            onClickHandler={deleteData}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
        </View>
      </View>
    </View>
  );
};

export default SQLTesting;

const styles = StyleSheet.create({
  heading: {
    // borderWidth: 1,
    // width: '70%',
  },
  headingText: {
    color: '#000',
    fontSize: 30,
  },
  text: {
    fontSize: 25,
  },
  theInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    // width: '100%',
    height: 40,
    marginVertical: 5,
    textAlign: 'center',
    color: '#181818',
  },
});
