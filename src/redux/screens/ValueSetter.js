import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'; //useSelector: to use the reducers for state management
import MyButton from '../../components/MyButton';
import GlobalStyles from '../../GlobalStyles';
import {setName, setAge, increaseAge, setAdmin} from '../actions'; //the actions we created

const ValueSetter = ({navigation}) => {
  const {name, age} = useSelector(state => state.user); //use the states using use selector
  const admin = useSelector(state => state.admin); //use the states using use selector
  const adminName = admin.name;
  const dispatch = useDispatch(); //use ddispatch to call the action

  // console.log('Login------state==============> ', state);
  //   console.log('Login------name==============> ', name);
  //   console.log('Login------age==============> ', age);

  const moveNext = () => {
    navigation.navigate('ReadMain1');
  };
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
            Set Values Here
          </Text>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              {`Name: ${name}\nAge: ${age}`}
            </Text>
          </View>
          <View>
            <Text style={[GlobalStyles.text, styles.text, GlobalStyles.font]}>
              {`Admin: ${adminName}`}
            </Text>
          </View>
        </View>
        <View class={'content'} style={[{borderWidth: 1, width: '70%'}]}>
          <View>
            <TextInput
              placeholder="Fist name"
              placeholderTextColor={'#00000060'}
              onChangeText={value => {
                dispatch(setName(value));
              }}
              style={styles.theInput}
            />
          </View>
          <View>
            <TextInput
              placeholder="Age"
              placeholderTextColor={'#00000060'}
              onChangeText={value => {
                dispatch(setAge(value));
              }}
              style={styles.theInput}
            />
          </View>
        </View>
        <View class={'buttons'}>
          <MyButton
            title={'Go to Next Screen'}
            onClickHandler={moveNext}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
          <MyButton
            title={'Increase Age'}
            onClickHandler={() => dispatch(increaseAge())}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
          <MyButton
            title={'Admin'}
            onClickHandler={() => dispatch(setAdmin('Muhammad Asad Saeed'))}
            styleOptions={{minWidth: 150, fontSize: 20, color: '#f0f'}}
          />
        </View>
      </View>
    </View>
  );
};

export default ValueSetter;

const styles = StyleSheet.create({
  heading: {
    // borderWidth: 1,
    // width: '70%',
  },
  headingText: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
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
