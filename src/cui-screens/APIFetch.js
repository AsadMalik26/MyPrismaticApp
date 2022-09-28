import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';
import GlobalStyles from '../GlobalStyles';

const APIFetch = () => {
  const [items, setItems] = useState([
    {value: 'Data Item 1'},
    {value: 'Data Item 2'},
    {value: 'Data Item 3'},
    {value: 'Data Item 4'},
    {value: 'Data Item 5'},
    {value: 'Data Item 6'},
    {value: 'Data Item 7'},
    {value: 'Data Item 8'},
    {value: 'Data Item 9'},
    {value: 'Data Item 10'},
  ]);
  const [data, setdata] = useState([]);
  const fetchRec = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log('movies=============>', json.movies);
      // return json.movies;
      setdata(json.movies);
    } catch (error) {
      console.error(error);
    }
  };
  const renderItem = ({item}) => (
    <View style={styles.itemBox}>
      <View
        style={{
          borderWidth: 1,
          marginVertical: 5,
          paddingLeft: 5,
          backgroundColor: '#e76f5180',
        }}>
        <Text style={styles.itemTitle}>Movie: {item.title}</Text>
      </View>
      <View style={{marginVertical: 5, paddingLeft: 5}}>
        <Text style={styles.details}>Release Year: {item.releaseYear}</Text>
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <Text style={GlobalStyles.text}>Fetch Api</Text>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
      <MyButton title={'Fetch from API'} onClickHandler={fetchRec} />
    </View>
  );
};

export default APIFetch;

const styles = StyleSheet.create({
  itemBody: {
    // justifyContent: 'center',
  },
  itemBox: {
    // width: '100%',
    backgroundColor: '#fb850050',
    marginVertical: 5,
  },
  itemTitle: {
    color: '#000000',
    fontSize: 20,
    // textAlignVertical: '',
    fontWeight: 'bold',
    // paddingLeft: '5',

    borderRadius: 5,
  },
  details: {
    // backgroundColor: '#fefae0',
    color: '#000000',
    // paddingLeft: '5',
  },
  item: {
    backgroundColor: '#226F54',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    padding: 1,
    textAlign: 'center',
  },
  title: {},
});
