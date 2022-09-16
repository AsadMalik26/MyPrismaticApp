import React, {useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';

const List = () => {
  const [items, setItems] = useState([
    {key: 1, value: 'Item 1'},
    {key: 2, value: 'Item 2'},
    {key: 3, value: 'Item 3'},
    {key: 4, value: 'Item 4'},
    {key: 5, value: 'Item 5'},
    {key: 6, value: 'Item 6'},
    {key: 7, value: 'Item 7'},
    {key: 8, value: 'Item 8'},
    {key: 9, value: 'Item 9'},
    {key: 10, value: 'Item 10'},
  ]);

  const [refresh, setRefresh] = useState(false);

  return (
    <View style={styles.itemBody}>
      <ScrollView
        horizontal={false}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(true);
              setItems([
                ...items,
                {key: 11, value: 'Item 11'},
                {key: 12, value: 'Item 12'},
                {key: 13, value: 'Item 13'},
                {key: 14, value: 'Item 14'},
                {key: 15, value: 'Item 15'},
                {key: 16, value: 'Item 16'},
                {key: 17, value: 'Item 17'},
                {key: 18, value: 'Item 18'},
                {key: 19, value: 'Item 19'},
              ]);
              setRefresh(false);
            }}
            colors={['#FFDE00']}
          />
        }>
        {/* items mapping */}
        {items.map((obj, index) => (
          <Text key={index} style={styles.text}>
            {obj.value}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemBody: {
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#226F54',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    padding: 1,
    textAlign: 'center',
  },
});
export default List;
