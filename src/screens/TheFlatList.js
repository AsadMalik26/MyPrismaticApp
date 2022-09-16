import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TheFlatList = () => {
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
  const [refresh, setRefresh] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const horizontalToggel = () => {
    setHorizontal(!horizontal);
  };
  return (
    <View>
      <Text>This is FlatList</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text onPress={horizontalToggel}>
          View in {horizontal ? 'Verticle' : 'Horizental'} Mode
        </Text>
      </TouchableOpacity>
      {/* renderItem is like map(), it pick one by one item from data */}
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        horizontal={horizontal}
        renderItem={({item}) => (
          <View style={styles.itemBody}>
            <Text style={styles.text}>{item.value}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(true);
              setItems([
                ...items,
                {value: 'Item 11'},
                {value: 'Item 12'},
                {value: 'Item 13'},
                {value: 'Item 14'},
                {value: 'Item 15'},
                {value: 'Item 16'},
                {value: 'Item 17'},
                {value: 'Item 18'},
                {value: 'Item 19'},
              ]);
              setRefresh(false);
            }}
            colors={['#FFDE00']}
          />
        }
      />
    </View>
  );
};

export default TheFlatList;

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
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '50%',
    height: 30,
  },
});
