import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ReferenceScreen from './src/screens/ReferenceScreen';
import MainScreen from './src/screens/MainScreen';
import DetailPage from './src/screens/DetailPage';
import { View, Text } from "react-native";
import { Font } from 'expo';

const RootStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen
    },
    Reference: {
      screen: ReferenceScreen
    },
    DetailPage: {
      screen: DetailPage
    }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
  );

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };


  async componentDidMount() {
    await Font.loadAsync({
      'koho-bold': require('./assets/fonts/KoHo-Bold.ttf'),
      'vecna-bold': require('./assets/fonts/Vecna-Bold.otf'),
    });

    this.setState({ fontLoaded: true });
  }


  render(){
    if (this.state.fontLoaded) {
      return <RootStack />
    } else {
      return null
    }
  }
}
