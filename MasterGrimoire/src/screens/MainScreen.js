import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import MENU_ITENS from '../constants/MenuItens';
import { APP_NAME } from '../constants/General';
import { styles } from '../styles/PagStyles';
import { Card, ListItem, Button } from 'react-native-elements'

class MainScreen extends Component {
  state = {
    choices: MENU_ITENS
  };

  _renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.buttons}>
        <Text style={styles.content}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    console.log(item);
    this.props.navigation.navigate(item.screen, {option: item})
  }

  static navigationOptions = {
    headerTitle: <Text style={ styles.headerTitle }>{APP_NAME}</Text>,
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
