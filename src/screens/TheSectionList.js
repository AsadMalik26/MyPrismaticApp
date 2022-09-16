import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TheSectionList = () => {
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

  const [DATA, setDATA] = useState([
    {title: 'Title 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3']},
    {title: 'Title 2', data: ['Item 2-1']},
  ]);

  const [refresh, setRefresh] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const horizontalToggel = () => {
    setHorizontal(!horizontal);
  };

  const renderItems = ({item}) => (
    <View style={styles.itemBody}>
      <Text style={styles.data}>{item}</Text>
    </View>
  );
  const sectionHeader = ({section}) => (
    <View style={styles.itemBody}>
      <Text style={styles.title}>{section.title}</Text>
    </View>
  );

  return (
    <View>
      <Text>This is Section List</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text onPress={horizontalToggel}>
          View in {horizontal ? 'Verticle' : 'Horizental'} Mode
        </Text>
      </TouchableOpacity>

      {/* here item means the array items */}
      <SectionList
        style={styles.listView}
        keyExtractor={(item, index) => index.toString()}
        horizontal={horizontal}
        sections={DATA}
        renderItem={renderItems}
        renderSectionHeader={sectionHeader}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              setRefresh(true);
              setDATA([
                ...DATA,
                {title: 'Title 3', data: ['Item 3-1', 'Item 3-1']},
                {title: 'Title 4', data: ['Item 4-1', 'Item 4-2']},
                {title: 'Title 5', data: ['Item 5-1']},
                {title: 'Title 6', data: ['Item 6-1']},
                {title: 'Title 7', data: ['Item 7-1', 'Item 7-2']},
                {title: 'Title 8', data: ['Item 8-1']},
                {title: 'Title 9', data: ['Item 9-1']},
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

export default TheSectionList;

const styles = StyleSheet.create({
  itemBody: {
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#226F54',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    padding: 1,
    textAlign: 'center',
  },
  data: {
    backgroundColor: '#8758FF',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 12,
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
  listView: {
    borderWidth: 1,
    borderColor: '#B2A4FF',
    maxHeight: '70%',
  },
});
