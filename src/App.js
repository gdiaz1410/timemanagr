import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


// firebase config will appear when app is launched
class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyD_2ZL_EfcG4m0xRJklaDcZtxoS0C7BBRA",
    authDomain: "managr-203d2.firebaseapp.com",
    databaseURL: "https://managr-203d2.firebaseio.com",
    storageBucket: "managr-203d2.appspot.com",
    messagingSenderId: "895746401290"
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}


export default App;
