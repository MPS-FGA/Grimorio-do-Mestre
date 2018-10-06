import React, { Component } from "react";
import {Text, View, FlatList, ScrollView} from "react-native";
import SPELLS_DETAILS from '../constants/spellsDetails';

class SpellsDetailPage extends Component {
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
    const title = this.state.item.name
    this.props.navigation.setParams({title: title})
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
      return(
        <View>
            <Text>Aeeeee</Text>
        </View>
      )
  }

}

export default SpellsDetailPage;
