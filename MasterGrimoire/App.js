import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ContentList from './src/screens/ContentList';
import MainScreen from './src/screens/MainScreen';
import DetailPage from './src/screens/DetailPage';
import SpellsDetailPage from './src/screens/SpellsDetailPage';

const App = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  ContentList: {
    screen: ContentList
  },
  DetailPage: {
    screen: DetailPage
  },
  SpellsDetailPage: {
    screen: SpellsDetailPage
  }
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
})

export default App;
