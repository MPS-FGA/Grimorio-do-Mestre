import React, { Component } from "react";
import {Text, View, FlatList, ScrollView} from "react-native";

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageInfo: [],
      item: [],
      rawJson: [],
    };
  }

  componentWillMount(){
    const { detailArg } = this.props.navigation.state.params
    this.setState({ pageInfo: detailArg.pageInfo })
    this.setState({ item: detailArg.item })
  }

  componentDidMount(){
    this.fetchData();
    // Used to change the header title dynamically.
    const title = this.state.item.name

    // console.log('################### this.state.item.name: ' + JSON.stringify(this.state.item.name))
    this.props.navigation.setParams({title: title})

    // console.log('################### this.state.rawJson: ' + JSON.stringify(this.state.rawJson))
  }

  fetchData = async () => {
    const response = await fetch(this.state.item.url);
    // console.log('################### this.state.item.url: ' + JSON.stringify(this.state.item.url))
    // const response = await fetch(`${BASE_URL}${endpoint}`);
    const json = await response.json();
    this.setState({ rawJson: json });
    // console.log('################### this.state.rawJson: ' + JSON.stringify(this.state.rawJson))
  };


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


  _renderDetail (){
    switch(this.state.pageInfo.option) {
    case 'Races':
      renderedItem = this._renderRace();
      break;
    case 'Classes':
      renderedItem = this._renderClass();
      break;
    default:
      renderedItem = <Text>Pou man, não sei.</Text>
      break;
    }

    return(renderedItem);
  }

  _renderlistAtribute = (listAtribute) => {
    return(
      <FlatList
        data={listAtribute}
        renderItem={this._renderListItem}
        keyExtractor = { (item) => item.url }
      />
    )
  }



  _renderListItem = ({item}) => {
    return  (
      <Text>
        {item.name}
      </Text>
    )
  }


  render() {
      return(
        <ScrollView >
          {this._renderDetail()}
        </ScrollView>
      )
  }

}



export default DetailPage;
