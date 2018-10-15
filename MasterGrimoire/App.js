import React from 'react';
import { Font } from 'expo';
import { View, Text } from "react-native";
import { StatusBar, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import ReferenceScreen from './src/screens/ReferenceScreen';
import ReferenceDetailScreen from './src/screens/ReferenceDetailScreen';

const RootStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen
    },
    Reference: {
      screen: ReferenceScreen
    },
    ReferenceDetailScreen: {
      screen: ReferenceDetailScreen
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
