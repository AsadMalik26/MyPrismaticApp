import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const Card = props => {
  const [setting, setSetting] = useState(global.setting);
  const [color, setColor] = useState(global.setting.themeColor);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      console.log('1 navigation useEffect is =', global.setting.themeColor);
      // console.log('Props=======> ', props.navigation);
      setSetting(global.setting);
      setColor(global.setting.themeColor);
      // console.log('Global Seting: ======> ', global.setting);
      // console.log('Seting: ======> ', setting);
    });
    return unsubscribe;
  }, [props.navigation, setSetting]);

  useEffect(() => {
    global.setting = {
      themeColor: 'orange',
      mode: 'Default',
    };
    console.log(
      '======================> Global Setting Assigned <===========================',
    );
  }, []);
  //   console.log(props.uniObj);
  const {univeristy, status, fee, admission, location} = props.uniObj;
  return (
    <View>
      {/* cards */}
      <View style={styles.card}>
        {/* image */}
        <View style={styles.image}>
          <Image
            source={require('../../assets/cardimage.jpg')}
            style={{width: '100%'}}
            // borderRadius={40}
          />
        </View>
        {/* text area */}
        <View style={styles.data}>
          <Text style={[styles.cardHeading(global.setting.themeColor)]}>
            {univeristy}
          </Text>
          <Text style={styles.text}>Status: {status}</Text>
          <Text style={styles.text}>Fee: {fee}</Text>
          <Text style={styles.text}>Admission: {admission}</Text>
          <Text style={styles.text}>Location: {location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    paddingLeft: 5,
    fontWeight: 'bold',
    // textAlignVertical: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,

    // shadow
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  image: {
    flex: 0.4,
    // borderWidth: 1,
  },
  data: {
    flex: 0.6,
    // borderWidth: 1,
    marginLeft: 5,
    // paddingLeft: 5,
    justifyContent: 'space-between',
  },
  cardHeading: (color = '#ef233c') => ({
    backgroundColor: color,
    // backgroundColor: global.setting.themeColor
    //   ? global.setting.themeColor
    //   : '#ef233c',
    width: '100%',
    height: 25,
    borderTopLeftRadius: 5,
    textAlignVertical: 'center',
    paddingLeft: 5,
    color: '#ddd',
    fontWeight: 'bold',
  }),
});
