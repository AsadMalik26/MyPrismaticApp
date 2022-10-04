import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'; //useSelector: to use the reducers for state management
import MyButton from '../../components/MyButton';
import GlobalStyles from '../../GlobalStyles';
import {setName, setAge, increaseAge, getCities} from '../actions'; //the actions we created

const ReadInner2 = ({navigation}) => {
  const {name, age, cities} = useSelector(state => state.user); //use the states using use selector
  const dispatch = useDispatch(); //use ddispatch to call the action
  const admin = useSelector(state => state.admin); //use the states using use selector
  const adminName = admin.name;
  // console.log('Login------state==============> ', state);
  //   console.log('Login------name==============> ', name);
  //   console.log('Login------age==============> ', age);

  useEffect(() => {
    dispatch(getCities());
  }, []);
  console.log('cities============> ', cities);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#f0f898',
          justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View class={'heading'} style={[styles.heading]}>
          <Text style={[GlobalStyles.font, styles.headingText]}>
            Reading Redux Values - 2
          </Text>
        </View>
        <View class={'content'} style={[{borderWidth: 1, width: '70%'}]}>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              {`Name: ${name}\nAge: ${age}`}
            </Text>
          </View>
        </View>
        <View class={'content'} style={[{borderWidth: 1, width: '70%'}]}>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              {`Admin: ${adminName}`}
            </Text>
          </View>
        </View>
        <View class={'content'} style={[{borderWidth: 1, width: '70%'}]}>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              Redux API Action
            </Text>
            <FlatList
              data={cities}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={{backgroundColor: 'whitesmoke', margin: 5}}>
                  <Text
                    style={[
                      GlobalStyles.text,
                      styles.headingText,
                      GlobalStyles.font,
                    ]}>
                    {item.name}
                  </Text>
                  <Text
                    style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
                    {item.city}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
        <View class={'buttons'}>
          <MyButton
            title={'Fetch Data from API'}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
            onClickHandler={() => dispatch(getCities())}
          />
        </View>
      </View>
    </View>
  );
};

export default ReadInner2;

const styles = StyleSheet.create({
  heading: {
    // borderWidth: 1,
    // width: '70%',
  },
  headingText: {
    color: '#000',
    fontSize: 30,
  },
  text: {
    fontSize: 25,
  },
  theInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    // width: '100%',
    height: 40,
    marginVertical: 5,
    textAlign: 'center',
    color: '#181818',
  },
});
