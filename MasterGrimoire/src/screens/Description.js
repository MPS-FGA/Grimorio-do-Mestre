import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";


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
    color :'white'
  },

  separator: {
    height:1,
    backgroundColor: '#4B0077'
  }
});

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
