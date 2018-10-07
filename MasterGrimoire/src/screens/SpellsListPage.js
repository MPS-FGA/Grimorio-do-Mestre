import React, { Component } from "react";
import { 
  TouchableOpacity, 
  FlatList, 
  Button, 
  Text, 
  View, 
  Picker } from "react-native";
import SPELLS_DETAILS from '../constants/spellsDetails';
import { SPELLS_PICKER_FILTERS } from '../constants/generalConstants';
import {styles} from '../styles/PagStyles';

class SpellsListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spellsList: SPELLS_DETAILS,
      pageInfo: [],
      pickerValues: SPELLS_PICKER_FILTERS,
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
  }

  // filterSpells(){
  //   const data = this.state.spellsList
  //   filterBy = { level: [1], casting_time: ["1 action"] },
  //   result = data.filter(o => Object.keys(filterBy).every(k => filterBy[k].some(f => o[k] === f)));
  //   this.setState({ spellsList: result })
  //   console.log(result.length)

  //   result2 = result.filter(x => x.classes.some(e => e.name == 'Sorcerer'))
  //   console.log(result2.length)
  // }

  // TODO - Implement pickers to get the filters
  _filterSpells = () => {
    result = this.state.pickerValues
    console.log('####### RESULT: ' + JSON.stringify(result))
  }

  _resetFilters = () => {
    this.setState({ spellsList: SPELLS_DETAILS })
    this.setState({ pickerValues: SPELLS_PICKER_FILTERS })
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
        <Picker
          style={{width: '80%', backgroundColor: '#ffffff'}}
          selectedValue={this.state.pickerValues.spellLevel}
          onValueChange={(itemValue, itemIndex) => this.setState({
            pickerValues: { ...this.state.pickerValues, spellLevel: itemValue }})
          }>
          <Picker.Item label="Select a Spell Level" value="" />
          <Picker.Item label="Level 1" value="1" />
          <Picker.Item label="Level 2" value="2" />
          <Picker.Item label="Level 3" value="3" />
          <Picker.Item label="Level 4" value="4" />
          <Picker.Item label="Level 5" value="5" />
          <Picker.Item label="Level 6" value="6" />
          <Picker.Item label="Level 7" value="7" />
          <Picker.Item label="Level 8" value="8" />
          <Picker.Item label="Level 9" value="9" />
        </Picker>

        <Picker
          style={{width: '80%', backgroundColor: '#ffffff'}}
          selectedValue={this.state.pickerValues.castingTime}
          onValueChange={(itemValue, itemIndex) => this.setState({
            pickerValues: { ...this.state.pickerValues, castingTime: itemValue }})
            }>
          <Picker.Item label="Select the Casting Time" value="" />
          <Picker.Item label="1 Action" value="1 action" />
          <Picker.Item label="1 Bonus Action" value="1 bonus action" />
          <Picker.Item label="1 Reaction" value="1 reaction" />
          <Picker.Item label="1 Minute" value="1 minute" />
          <Picker.Item label="10 Minutes" value="10 minutes" />
          <Picker.Item label="1 Hour" value="1 hour" />
          <Picker.Item label="8 Hours" value="8 hours" />
          <Picker.Item label="12 Hours" value="12 hours" />
          <Picker.Item label="24 Hours" value="24 hours" />
        </Picker>

        <Picker
          style={{width: '80%', backgroundColor: '#ffffff'}}
          selectedValue={this.state.pickerValues.class}
          onValueChange={(itemValue, itemIndex) => this.setState({
            pickerValues: { ...this.state.pickerValues, class: itemValue }})
          }>
          <Picker.Item label="Select the Class" value="" />
          <Picker.Item label="Bard" value="Bard" />
          <Picker.Item label="Cleric" value="Cleric" />
          <Picker.Item label="Druid" value="Druid" />
          <Picker.Item label="Paladin" value="Paladin" />
          <Picker.Item label="Ranger" value="Ranger" />
          <Picker.Item label="Sorcerer" value="Sorcerer" />
          <Picker.Item label="Warlock" value="Warlock" />
          <Picker.Item label="Wizard" value="Wizard" />
        </Picker>

        <Button
          onPress={this._filterSpells}
          title="Filter"
          color="#841584"
          accessibilityLabel="Filter Spells"
        />

        <Button
          onPress={this._resetFilters}
          title="Reset Filters"
          color="#841584"
          accessibilityLabel="Reset Filters"
        />

        <FlatList
          data={this.state.spellsList}
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
