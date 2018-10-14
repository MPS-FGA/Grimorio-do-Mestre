import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { BASE_URL } from '../constants/General';
import { styles } from '../styles/PagStyles';
import { Card } from 'react-native-elements'
import Reference from '../components/references/Reference'

class ReferenceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount(){
    const { option } = this.props.navigation.state.params
    this.props.navigation.setParams({title: option.title})
  }


  static navigationOptions = ({ navigation }) => {
    let title = navigation.getParam('title', 'Options Available')
    return {
      headerTitle: <Text style={ styles.headerTitle }>{title}</Text>,
    };
  };

  render() {
    let navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Classes</Text>
        <Reference type="classes" navigation={navigation}/>
      </View>
    );
  }
}

export default ReferenceScreen;
