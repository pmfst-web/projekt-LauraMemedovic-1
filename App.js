import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rijecReducer from './store/reducers/rijeci';

import Igra from './screens/Igra';
import Pocetni from './screens/Pocetni';
import Kraj from './screens/Kraj';
import Naslov from './components/Naslov';
import Botun from './components/Botun';
import { RIJECI } from './data/podaci';

const Stack = createNativeStackNavigator();

const glavniReducer = combineReducers({
  rijeci: rijecReducer,
});

const store = createStore(glavniReducer);

export default function App() {

  return (
    <Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});

