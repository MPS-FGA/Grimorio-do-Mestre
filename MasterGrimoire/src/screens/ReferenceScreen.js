import React, { Component } from "react";
import { TouchableOpacity, TouchableHighlight, FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { BASE_URL } from '../constants/General';
import { styles } from '../styles/PagStyles';
import { Card } from 'react-native-elements'
import ReferenceCard from '../components/references/ReferenceCard'
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

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    return <TouchableHighlight
      key={`${name}_${page}`}
      onPress={() => onPressHandler(page)}
      onLayout={onLayoutHandler}
      style={styles.tabBar}
      underlayColor="#4444"
    >
      <Text style={styles.tabBarText}>{name}</Text>
    </TouchableHighlight>;
  }

  render() {
    let navigation = this.props.navigation;
    return (
      <ScrollableTabView
        initialPage={0}
        style={styles.tabBar}
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        renderTabBar={() => <ScrollableTabBar renderTab={this.renderTab}/>}
      >
        <ReferenceCard tabLabel='Classes' referenceType="Classes" navigation={navigation}/>
        <ReferenceCard tabLabel='Races' referenceType="Races" navigation={navigation}/>
        <Spells tabLabel='Spells' navigation={navigation} />
      </ScrollableTabView>
    )
  }
}

export default ReferenceScreen;
