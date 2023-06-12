import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import gameReducer from './store/reducers/gameReducer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';

const Stack = createStackNavigator();

const store = createStore(gameReducer) 

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pravila" component={HomeScreen} />
          <Stack.Screen name="Igra" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
