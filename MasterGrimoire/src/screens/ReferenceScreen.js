import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { BASE_URL } from '../constants/General';
import { styles } from '../styles/PagStyles';
import { Card } from 'react-native-elements'
import Reference from '../components/references/Reference'
import Spells from '../components/references/Spells'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Header from '../components/general/Header';

class ReferenceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    let title = navigation.getParam('title', 'Options Available')
    return {
      header: <Header title={title} navigation={navigation}/>,
    };
  };

  componentWillMount(){
    const { option } = this.props.navigation.state.params
    this.props.navigation.setParams({title: option.title})
  }

  render() {
    let navigation = this.props.navigation;
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <Reference tabLabel='Classes' referenceType="Classes" navigation={navigation}/>
        <Reference tabLabel='Races' referenceType="Races" navigation={navigation}/>
        <Spells tabLabel='Spells' navigation={navigation} />
      </ScrollableTabView>
    )
  }
}

export default ReferenceScreen;
