import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ContentList from './src/screens/ContentList';
import MainScreen from './src/screens/MainScreen';
import Description from './src/screens/Description';


const App = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  ContentList: {
    screen: ContentList
  },
  Description: {
    screen: Description
  }
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App;
