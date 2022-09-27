import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const Card = props => {
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
          <Text style={[styles.cardHeading]}>{univeristy}</Text>
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
  cardHeading: {
    backgroundColor: '#e63946',
    width: '100%',
    height: 25,
    borderTopLeftRadius: 5,
    textAlignVertical: 'center',
    paddingLeft: 5,
    color: '#ddd',
    fontWeight: 'bold',
  },
});
