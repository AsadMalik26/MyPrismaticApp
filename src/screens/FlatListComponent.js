import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalStyles from '../GlobalStyles';

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
    <Text
      style={[
        GlobalStyles.text,
        {justifyContent: 'center', alignItems: 'center', flex: 1},
      ]}
      key={index}>
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
