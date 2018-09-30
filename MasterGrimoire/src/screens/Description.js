import React, { Component } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import {styles} from '../styles/PagStyles';
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  content: {
    marginLeft: 10,
    fontSize: 20,
    color :'white',
  },
});
*/
class Description extends Component {
  state = {

  };
  static navigationOptions = ({ navigation }) => {
    return {
      // If it finds the title defined dynamically, uses it. If not, uses default message.
      title: navigation.getParam('title', 'Description'),
      headerStyle: {
        backgroundColor: '#8D6AB1',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
    };
  };
  render() {
      return (
      <View style={styles.container}>
        <Text style={styles.content}>To aqui;</Text>
      </View>
      );
  }
}
export default Description;
