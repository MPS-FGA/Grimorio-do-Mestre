import React, { Component } from "react";
import {
  TouchableOpacity,
  FlatList,
  Button,
  Text,
  View,
  Picker,
  TextInput,
  ScrollView,
  StyleSheet } from "react-native";
import SPELLS from '../../data/Spells';
import { SPELLS_PICKER_FILTERS } from '../../constants/General';
import {styles} from '../../styles/PagStyles';

class Spells extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spellsList: SPELLS,
      pageInfo: [],
      pickerValues: SPELLS_PICKER_FILTERS,
    };
  }
styles = StyleSheet.create({
    containePicker :{
        width: 400,
        backgroundColor: '#ffffff',
        textAlign: 'center'
      },
})


  _filterByName = (value) => {
    result = SPELLS

    inputText = value
    this.setState({ pickerValues: { ...this.state.pickerValues, spellName: inputText }})

    result = result.filter(x => x.name.toLowerCase().includes(inputText.toLowerCase()))
    this.setState({ spellsList: result })
 }

  _filterByPickers = () => {
    result = SPELLS
    filters = this.state.pickerValues

    if (filters.spellLevel != ""){
      result = result.filter(x => x.level == filters.spellLevel)
      console.log('Spell Level: ' + result.length)
    }

    if (filters.castingTime != ""){
      result = result.filter(x => x.casting_time == filters.castingTime)
      console.log('Casting Time: ' + result.length)
    }

    if (filters.class != ""){
      result = result.filter(x => x.classes.some(e => e.name == filters.class))
      console.log('Class: ' + result.length)
    }

    if (filters.school != ""){
      result = result.filter(x => x.school.name.includes(filters.school))
      console.log('School: ' + result.length)
    }

    if (filters.ritual != ""){
      result = result.filter(x => x.ritual == filters.ritual)
      console.log('Ritual: ' + result.length)
    }

    this.setState({ spellsList: result })
  }

  // To reset filters come back the state to initial state
  _resetFilters = () => {
    this.setState({ spellsList: SPELLS })
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
    this.props.navigation.navigate("ReferenceDetailScreen",
      { detailArg : { item : item, pageInfo : this.state.pageInfo } })
  }


  _renderContext(){
    if(this.state.spellsList.length == 0){
      return (
        <Text style={{color: '#FFFFFF'}}>
          No Spells Found!
        </Text>
      )
    }else{
      return (
        <FlatList
          data={this.state.spellsList}
          renderItem={this._renderItem}
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={()=>
            <View style={styles.separator} />
          }
        />
      )
    }
  }

  render() {
    return (
      <ScrollView>
        <TextInput
            style={styles.containePicker}
            value={this.state.pickerValues.spellName}
            onChangeText={this._filterByName}
          />

        <Picker
          style={styles.containePicker}
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
          style={styles.containePicker}
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
          style={styles.containePicker}
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

        <Picker
          style={styles.containePicker}
          selectedValue={this.state.pickerValues.school}
          onValueChange={(itemValue, itemIndex) => this.setState({
            pickerValues: { ...this.state.pickerValues, school: itemValue }})
          }>
          <Picker.Item label="Select the School" value="" />
          <Picker.Item label="Abjuration" value="Abjuration" />
          <Picker.Item label="Conjuration" value="Conjuration" />
          <Picker.Item label="Divination" value="Divination" />
          <Picker.Item label="Enchantment" value="Enchantment" />
          <Picker.Item label="Evocation" value="Evocation" />
          <Picker.Item label="Illusion" value="Illusion" />
          <Picker.Item label="Necromancy" value="Necromancy" />
          <Picker.Item label="Transmutation" value="Transmutation" />
        </Picker>

        <Picker
          style={styles.containePicker}
          selectedValue={this.state.pickerValues.ritual}
          onValueChange={(itemValue, itemIndex) => this.setState({
            pickerValues: { ...this.state.pickerValues, ritual: itemValue }})
          }>
          <Picker.Item label="Ritual" value="" />
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>

        <Button
          onPress={this._filterByPickers}
          title="Filter"
          color="#000000"
          accessibilityLabel="Filter Spells"
        />

        <Button
          onPress={this._resetFilters}
          title="Reset Filters"
          color="#000000"
          accessibilityLabel="Reset Filters"
        />

        {this._renderContext()}

      </ScrollView>
    );
  }
}

export default Spells;
