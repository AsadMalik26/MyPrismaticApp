import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('Asad');
  const onClickHandler = () => {
    setName('Programming With Ali Ahmad');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>

      <TouchableOpacity style={styles.buttonStyle} onPress={onClickHandler}>
        <Text>Update state</Text>
      </TouchableOpacity>
      <Text>Hello world</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    //  backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  text: {
    //borderRadius: 5,
    fontSize: 20,
    //padding: 10,
    fontStyle: 'bold',
    //margin: 10,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '50%',
    height: '5%',
  },
});
