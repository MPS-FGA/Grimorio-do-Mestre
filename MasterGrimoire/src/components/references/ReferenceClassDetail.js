import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  Text,
  View,
  Picker,
  TextInput } from "react-native";
import RACES from '../../data/Races';
import CLASSES from '../../data/Classes';
import { styles } from '../../styles/PagStyles';
import { Card } from 'react-native-elements'
import ListEmpty from '../general/ListEmpty'


class ReferenceClassDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  _renderlistAtribute = (listAtribute) => {
    return(
      <FlatList
        data={listAtribute}
        renderItem={this._renderListItem}
        keyExtractor = { (item) => item.url }
      />
    )
  }

  render() {
    let item = this.props.item;
    return (
      <View style={styles.subContainer}>
        <Text>Hit die:</Text><Text>{item.hit_die}</Text>

      </View>
    );
  }
}

export default ReferenceClassDetail;
