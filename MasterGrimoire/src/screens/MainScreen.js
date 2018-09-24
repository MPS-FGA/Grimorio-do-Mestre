import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

class MainScreen extends Component {
  state = {
    choices: [{"option": "Classes", "screen": "ClassesList"}, {"option": "Races", "screen": "RacesList"}]
  };
  
  _renderItem = ({item}) => {
    return  (
      <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
        <Text style={{marginLeft: 10}}>{item.option}</Text>
      </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate(item.screen, {option: item})
  }

  render() {
    return (
        <FlatList
          data={this.state.choices}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={{height:1, backgroundColor: '#f7f7f7'}} />
          }
        />
    );
  }
}

export default MainScreen;
