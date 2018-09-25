import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import MENU_ITENS from '../constants/menuItens';
import { APP_NAME } from '../constants/generalConstants';

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
    choices: MENU_ITENS
  };
  
  _renderItem = ({item}) => {
    return  (
      <TouchableOpacity onPress={()=>this._onItemPress(item)} style={{flexDirection:'row', padding: 10, alignItems:'center'}}>
        <Text style={{marginLeft: 10}}>{item.option}</Text>
      </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate('ClassesList', {option: item})
  }

  static navigationOptions = {
    title: APP_NAME,
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#f00',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
    },
  };

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
