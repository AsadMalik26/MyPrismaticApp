import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import MyButton from '../components/MyButton';
const radius = 20;
const TheModels = () => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onClickHandler = () => {
    if (name.length > 3) {
      setShow(!show);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <View style={styles.bodyStyling}>
      <Text style={styles.text}>Hello Input! This is from TheModels</Text>

      <Modal
        visible={showWarning}
        transparent={true}
        onRequestClose={() => setShowWarning(false)}
        animationType={'fade'}
        // style={{height: '50%', backgroundColor: '#CD104D', color: '#CD104D'}} //style not working
      >
        <View style={styles.centered}>
          <View style={styles.model_warning}>
            <View style={styles.model_title_block}>
              <Text style={styles.black_text}>Warning</Text>
            </View>
            <Text style={styles.black_text}>
              Model {'\n'}The name length must be greater than 3
            </Text>
            <TouchableOpacity
              style={styles.model_button_block}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              android_ripple={{color: '#C6EBC5', foreground: '#367E18'}}
              onPress={() => setShowWarning(false)}>
              <Text style={styles.black_text}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>What's Your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Asad"
        maxLength={20}
        keyboardType="default"
        editable={true}
        onChangeText={value => {
          setName(value);
        }}
        // secureTextEntry={true} //for passwords
      />
      <MyButton
        onClickHandler={onClickHandler}
        title={show ? 'Clear' : 'Submit'}
      />
      {show ? (
        <View>
          <Text style={styles.text}>{name}, You are registered</Text>
          <Image
            source={require('../../assets/done.webp')}
            style={styles.logo}
            resizeMode={'cover'}
          />
        </View>
      ) : (
        <Image
          source={require('../../assets/alert.webp')}
          style={styles.logo}
          resizeMode={'cover'}
          animationType={'fade'}
        />
      )}
    </View>
  );
};

export default TheModels;

const styles = StyleSheet.create({
  bodyStyling: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    margin: 2,
    padding: 2,
    backgroundColor: '#00000040',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '50%',
    height: 30,
    marginVertical: 7,
  },
  black_text: {
    color: '#000000',
    textAlign: 'center',

    fontSize: 16,
  },
  centered: {
    height: '50%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  model_warning: {
    backgroundColor: '#C3F8FF',
    height: 300,
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: radius,
  },
  model_title_block: {
    backgroundColor: '#FD841F',
    width: '100%',
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  },
  model_button_block: {
    backgroundColor: '#ADDDD0',
    width: '100%',
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: radius,
    borderBottomRightRadius: radius,
  },
  logo: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
});
