import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function SettingScreen({navigation}) {
  useEffect(() => {
    // return(()=>{
    //   console.log('is this calling');
    // })

    return () => {
      console.log('I am going Back from Setting Screen');
    };
  }, []);

  const saveSettings = () => {
    global.setting = {
      fs: 50,
      fc: 'green',
      bc: 'white',
    };
    // console.log('pressed')
    navigation.navigate('LearnFlatList');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <TouchableOpacity
        style={{width: 100, height: 60, backgroundColor: 'grey'}}
        onPress={saveSettings}>
        <Text> I am testing </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
