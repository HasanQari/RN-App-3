import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


import mealsReducer from './store/reducers/meals';
import AppNavigator from './navigation/AppNav';
//----------------------------------------------------------------------------------------------

// increase efficncy of app
enableScreens();

// combine all reducer to send it into storage like DB server
const rootReducer = combineReducers({
  meals: mealsReducer
});

// create store data var
const store = createStore(rootReducer);

// fetch font function
const fetchFont = () => {
  return Font.loadAsync({
    'open-s': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-s-b': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

//----------------------------------------------------------------------------------------------
export default function App() {

  // useState Section:
  const [fontLoad, setFontLoad] = useState(false);

  // font loaded checker
  if (!fontLoad) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setFontLoad(true)} />
    )
  }

  // return the view 
  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
