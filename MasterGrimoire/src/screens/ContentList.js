import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import { BASE_URL } from '../constants/generalConstants';
import {styles} from '../styles/PagStyles';
import { Card } from 'react-native-elements'

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
  };

  _renderItem = ({item}) => {
    return  (
      <Card containerStyle={{width: '100%', marginLeft: 0}}>
          <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.buttons}>
          <View style={{marginTop:-70}}>
            <Text style={styles.contentCardTitle}>
                {item.name}{'\n'}{'\n'}
            </Text>
          </View>
            <View style={{marginTop:70,marginLeft:-200}}>
                /*Put here the resume contents*/
            </View>
      </TouchableOpacity>
    </Card>
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
        <FlatList
          data={this.state.lists}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={styles.separatorCard} />
          }
        />
    );
  }
}

export default ContentList;
