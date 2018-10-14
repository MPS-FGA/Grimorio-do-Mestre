import React, { Component } from "react";
import {
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

class Reference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: CLASSES,
      races: RACES,
      isLoading: false
    };
  }

  _renderItem = ({item}) => {
    return  (
      <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.buttons}>
          <Text style={styles.content}>
            {item.name}
          </Text>
      </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate("DetailPage",
      { detailArg : { item : item, pageInfo : [] } })
  }

  _renderContext(){
    if(this.state.classes.length == 0){
      return (
        <Text style={{color: '#FFFFFF'}}>
          No Races Found!
        </Text>
      )
    }else{
      return (
        <FlatList
          data={this.state.classes}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={styles.separator} />
          }
        />
      )
    }
  }


  render() {
    console.log(this.state);
    return (
      <View style={styles.subContainer}>
        {this._renderContext()}
      </View>
    );
  }
}

export default Reference;
