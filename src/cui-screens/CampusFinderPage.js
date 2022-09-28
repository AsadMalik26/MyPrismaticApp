import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card from './Card';

const CampusFinderPage = ({navigation}) => {
  const [list, setList] = useState([
    // {
    //   key: 1,
    //   name: 'Filters',
    // },
    {
      key: 2,
      name: 'Dicipline',
    },
    {
      key: 3,
      name: 'City',
    },
    {
      key: 4,
      name: 'Rank',
    },
    {
      key: 5,
      name: 'Fee',
    },
    {
      key: 6,
      name: 'Location',
    },
    {
      key: 7,
      name: 'Addmission',
    },
  ]);

  const availableFillters = [
    {
      key: 0,
      title: 'Fillters',
    },
    {
      key: 1,
      title: 'City',
    },
    {
      key: 2,
      title: 'Rank',
    },
    {
      key: 3,
      title: 'Admission',
    },
    {
      key: 4,
      title: 'Status',
    },
  ];
  const [universities, setuniversities] = useState([
    {
      univeristy: 'University of Narowal',
      status: 'Public',
      fee: '150000',
      admission: 'open',
      location: 'Karachi',
    },
    {
      univeristy: 'Adbul Wali Khan',
      status: 'Public',
      fee: '37790',
      admission: 'open',
      location: 'Karachi',
    },
    {
      univeristy: 'Allama Iqbal Open University',
      status: 'Public',
      fee: '17790',
      admission: 'open',
      location: 'Karachi',
    },
    {
      univeristy: 'Comsats',
      status: 'Private',
      fee: '92000',
      admission: 'open',
      location: 'Lahore',
    },
    {
      univeristy: 'UET',
      status: 'Public',
      fee: '130000',
      admission: 'open',
      location: 'Lahore',
    },
    {
      univeristy: 'UMT',
      status: 'Private',
      fee: '120000',
      admission: 'open',
      location: 'Lahore',
    },
    {
      univeristy: 'UOL',
      status: 'Private',
      fee: '160000',
      admission: 'open',
      location: 'Lahore',
    },
  ]);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headingText}>
          Total Institutions: {universities.length}
        </Text>
      </View>

      <FlatList
        style={[styles.flatlist, styles.listView]}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity style={[styles.listItem, styles.list]}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <FlatList
        data={availableFillters}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity style={[styles.listItem, styles.filters]}>
            <Text style={styles.text}>{item.title}</Text>
            <FontAwesome5 name="times-circle" style={styles.cornerIcon} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
        style={[styles.flatlist, styles.listView]}
      />
      <ScrollView>
        {/* cards */}
        {universities.map((uniObj, index) => (
          <Card uniObj={uniObj} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampusFinderPage;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 2,
    // borderRadius: 15,
    margin: 5,
    // backgroundColor: 'yellow',
  },
  header: {
    width: '95%',
    // backgroundColor: 'whitesmoke',
  },
  headingText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    // fontSize: 20,
  },
  listView: {
    maxHeight: 50,
  },
  listItem: {
    height: 30,
    minWidth: 70,
    borderWidth: 1,
    margin: 5,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
  },
  flatlist: {
    height: 50,
    marginVertical: 3,
  },

  filters: {
    backgroundColor: '#e6394690',
    position: 'relative',
  },
  list: {
    backgroundColor: '#8d99ae70',
  },
  cornerIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#000',
  },
});
