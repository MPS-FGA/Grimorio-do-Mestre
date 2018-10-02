import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import { BASE_URL } from '../constants/generalConstants';

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

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      pageInfo: [],
    };
  }

  componentWillMount(){
    const { option } = this.props.navigation.state.params
    this.setState({ pageInfo: option })
  }

  componentDidMount() {
    this.fetchData();
    // Used to change the header title dynamically.
    const title = this.state.pageInfo.option
    this.props.navigation.setParams({title: title})
  }

  fetchData = async () => {
    const endpoint = this.state.pageInfo.endpoint
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const json = await response.json();
    this.setState({ lists: json.results });
    // console.log('################### this.state.lists: ' + JSON.stringify(this.state.lists))
  };

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
    this.props.navigation.navigate('DetailPage', {detailArg : {item : item, pageInfo : this.state.pageInfo } })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // If it finds the title defined dynamically, uses it. If not, uses default message.
      title: navigation.getParam('title', 'Options Available'),
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#f00',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.lists}
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

export default ContentList;
