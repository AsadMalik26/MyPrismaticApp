import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatListComponent = () => {
  const data = [
    {
      name: 'Asad',
    },
    {
      name: 'Mubashar',
    },
    {
      name: 'Arslan',
    },
    {
      name: 'Ali',
    },
  ];

  const renderItem = ({item, index}) => {
    <Text style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      {item}
    </Text>;
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.index}
    />
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({});
