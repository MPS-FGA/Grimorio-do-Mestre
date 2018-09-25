import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import { BASE_URL } from '../constants/generalConstants';

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class ClassesList extends Component {
  state = {
    classes: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { option } = this.props.navigation.state.params
    const response = await fetch(`${BASE_URL}${option.endpoint}`);
    const json = await response.json();
    this.setState({ classes: json.results });
  };
  
  _renderItem = ({item}) => {
    return  (
      <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
        <Text style={{marginLeft: 10}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate('Description', {hero: item})
  }

  static navigationOptions = {
    title: 'Vamos lá!'
}

  render() {
    return (
        <FlatList
          data={this.state.classes}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={{height:1, backgroundColor: '#f7f7f7'}} />
          }
        />
    );
  }
}

export default ClassesList;
