import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
    const response = await fetch("http://www.dnd5eapi.co/api/classes/");
    const json = await response.json();
    this.setState({ classes: json.results });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.classes}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({ item }) =>
            <Text>
              {`${item.name}`}
            </Text>}
        />
      </View>
    );
  }
}

export default ClassesList;
