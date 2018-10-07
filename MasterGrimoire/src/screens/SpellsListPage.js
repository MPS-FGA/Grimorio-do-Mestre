import React, { Component } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import SPELLS_DETAILS from '../constants/spellsDetails';
import {styles} from '../styles/PagStyles';

class SpellsListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completeList: SPELLS_DETAILS,
      filteredList: SPELLS_DETAILS,
      pageInfo: [],
    };
  }

  componentWillMount(){
    const { option } = this.props.navigation.state.params
    this.setState({ pageInfo: option })
  }

  componentDidMount() {
    // Used to change the header title dynamically.
    const title = this.state.pageInfo.option
    this.props.navigation.setParams({title: title})

    // Just testing...
    const cast = "1 action"
    const level = 1
    this.filterSpells(cast, level)
  }

  // filterSpells(){
  //   const data = this.state.completeList
  //   filterBy = { level: [1], casting_time: ["1 action"] },
  //   result = data.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));
  //   this.setState({ filteredList: result })
  //   console.log(result.length)

  //   result2 = result.filter(x => x.classes.some(e => e.name == 'Sorcerer'))
  //   console.log(result2.length)
  // }

  // TODO - Implement pickers to get the filters
  filterSpells(casting_time, level, classes){
    result = this.state.completeList
    console.log('FIRST - ' + result.length)
    
    if (casting_time != null) {
      result = result.filter(x => x.casting_time == casting_time)
      console.log('CASTING DIFERENT NULL - ' + result.length)
    }

    if (level != null) {
      result = result.filter(x => x.level == level)
      console.log('LEVEL DIFERENT NULL - ' + result.length)
    }

    if (classes != null) {
      console.log('CLASSES DIFERENT NULL ' + result.length)
    } else {
      console.log('CLASSES IS NULL ' + result.length)
    }

    console.log('END - ' + result.length)
    this.setState({ filteredList: result })
  }

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
    this.props.navigation.navigate("DetailPage", 
      { detailArg : { item : item, pageInfo : this.state.pageInfo } })
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
          data={this.state.filteredList}
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

export default SpellsListPage;
