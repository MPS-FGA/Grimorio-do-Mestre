import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import MENU_ITENS from '../constants/menuItens';
import { APP_NAME } from '../constants/generalConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  buttons: {
    flexDirection:'row',
    padding: 10, 
    alignItems:'center'
  },

  content: {
    marginLeft: 10,
    fontSize: 20
  },

  separator: {
    height:1, 
    backgroundColor: '#f7f7f7'
  }
});

class MainScreen extends Component {
  state = {
    choices: MENU_ITENS
  };
  
  _renderItem = ({item}) => {
    return  (
      <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.buttons}>
        <Text style={styles.content}>
          {item.option}
        </Text>
      </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate(item.screen, {option: item})
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
      <View style={styles.container}>
        <FlatList
          data={this.state.choices}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={styles.separator} />
          }
        />
      </View>
    );
  }
}

export default MainScreen;
