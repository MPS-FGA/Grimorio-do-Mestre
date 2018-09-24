import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ClassesList from './src/screens/ClassesList';
import MainScreen from './src/screens/MainScreen';

const App = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  ClassesList: {
    screen: ClassesList
  }
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App