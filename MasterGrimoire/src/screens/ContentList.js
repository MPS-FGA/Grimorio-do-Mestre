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
    // console.log('################### this.state.lists: ' + JSON.stringify(this.state.lists))
  };

  _renderItem = ({item}) => {
    return  (

      <Card >
        <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.buttons}>
          <Text style={styles.contentCardTitle}>
              {item.name}{'\n'}{'\n'}
          </Text>
          <Text style={styles.contentCard}>
            <Text style={{fontSize:12,fontWeight:'bold'}}>Hit Dice:</Text> 1d12 per barbarian level.{'\n'}{'\n'}
              <Text style={{fontSize:12,fontWeight:'bold'}}>Hit Points at 1st Level:</Text> 12 + your Constitution modifier.{'\n'}{'\n'}
              <Text style={{fontSize:12,fontWeight:'bold'}}>Hit Points at Higher Levels:</Text> 1d12 (or 7) + your Constitution modifier per barbarian level after 1st.{'\n'}{'\n'}
          </Text>
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
      <View style={styles.container}>
        <FlatList
          data={this.state.lists}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={styles.separatorCard} />
          }
        />
      </View>
    );
  }
}

export default ContentList;
