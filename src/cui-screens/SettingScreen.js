import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import MyButton from '../components/MyButton';

export default function SettingScreen(props) {
  const [selectedColor, setSelectedColor] = useState(global.setting.themeColor);
  // const [selectedMode, setSelectedMode] = useState(global.setting.mode);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.h1}>Setting</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.h3(selectedColor)}>Set Color</Text>
        <Picker
          style={{backgroundColor: 'black', width: '70%', alignSelf: 'center'}}
          selectedValue={selectedColor}
          onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}>
          <Picker.Item label="default (red)" value="#ef233c" />
          <Picker.Item label="pink" value="#ffafcc" />
          <Picker.Item label="blue" value="#457b9d" />
          <Picker.Item label="Electric Brown" value="#fb8500" />
          <Picker.Item label="Creamy White" value="#fcf6bd" />
          <Picker.Item label="grey" value="#cbc0d3" />
        </Picker>
      </View>

      <View style={styles.buttom}>
        <MyButton
          title={'Go back'}
          onClickHandler={() => {
            global.setting = {themeColor: selectedColor};
            props.navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
  top: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a4b2c5',
  },

  h3: selectedColor => ({
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
    fontWeight: 'bold',
    color: selectedColor,
  }),

  h3_nonColored: {
    fontSize: 30,
    padding: 20,
    fontWeight: 'bold',
    color: '#5DADE2',
  },

  middle: {
    flex: 0.65,
  },
  buttom: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingTop: 10,
    paddingLeft: 90,
    paddingBottom: 10,
    paddingRight: 90,
    borderRadius: 30,
    backgroundColor: '#2E86C1',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});
