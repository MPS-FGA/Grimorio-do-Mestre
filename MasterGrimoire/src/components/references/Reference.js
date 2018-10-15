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
      referenceType: ""
    };
  }

  componentWillMount(){
    this.setState({referenceType: this.props.referenceType})
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
    this.props.navigation.navigate("ReferenceDetailScreen",
      { detailArg : { item : item, referenceType: this.props.referenceType} })
  }

  _renderContext(){
    let data = []
    if (this.state.referenceType === "Classes") {
      data = this.state.classes;
    } else {
      data = this.state.races;
    }

    if(data.length == 0){
      return (
        <Text style={{color: '#FFFFFF'}}>
          Data Found!
        </Text>
      )
    }else{
      return (
        <FlatList
          data={data}
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
    return (
      <View style={styles.subContainer}>
        {this._renderContext()}
      </View>
    );
  }
}

export default Reference;
