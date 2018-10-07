import React, { Component } from "react";
import {Text, View, FlatList, ScrollView} from "react-native";
import {styles} from '../styles/PagStyles';

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
    this.props.navigation.setParams({title: title})
  }

  fetchData = async () => {
    const response = await fetch(this.state.item.url);
    const json = await response.json();
    this.setState({ rawJson: json });
  };


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

  _renderRace = () => {
    const itemJson = this.state.rawJson;

    return(
      <View>
        <Text><Text>Speed</Text>: {itemJson.speed}</Text>
        <Text><Text>Alignment</Text>: {itemJson.alignment}</Text>
        <Text><Text>Age</Text>: {itemJson.age}</Text>
        <Text><Text>Size</Text>: {itemJson.size} - {itemJson.size_description}</Text>
        {(typeof itemJson.starting_proficiencies !== 'undefined' && itemJson.starting_proficiencies.length > 0) && (
            <View>
              <Text><Text>Starting Proficiencies</Text>: </Text>
              {this._renderlistAtribute(itemJson.starting_proficiencies)}
            </View>
        )}
        {(typeof itemJson.starting_proficiency_options !== 'undefined'
          && typeof itemJson.starting_proficiency_options.from !== 'undefined' && itemJson.starting_proficiency_options.from.length > 0) && (
            <View>
              <Text><Text>Starting proficiency options</Text>:</Text>
              <Text><Text>Can choose </Text>: {itemJson.starting_proficiency_options.choose}</Text>
              {this._renderlistAtribute(itemJson.starting_proficiency_options.from)}
            </View>
        )}
        <Text><Text>Languages Description</Text>: {itemJson.language_desc}</Text>
        {(typeof itemJson.languages !== 'undefined' && itemJson.languages.length > 0) && (
            <View>
              <Text><Text>Languages</Text>: </Text>
              {this._renderlistAtribute(itemJson.languages)}
            </View>
        )}
        {(typeof itemJson.traits !== 'undefined' && itemJson.traits.length > 0) && (
            <View>
              <Text><Text>Traits</Text>: </Text>
              {this._renderlistAtribute(itemJson.traits)}
            </View>
        )}
        <Text><Text>Ability bonuses</Text>: {itemJson.ability_bonuses}</Text>
        {(typeof itemJson.subraces !== 'undefined' && itemJson.subraces.length > 0) && (
            <View>
              <Text><Text>Subraces</Text>: </Text>
              {this._renderlistAtribute(itemJson.subraces)}
            </View>
        )}
      </View>
    )

  }

  _renderClass = () => {

    itemJson = this.state.rawJson;
    return(
      <View>
        <Text><Text>Hit dice</Text>: {itemJson.hit_die}</Text>
        {(typeof itemJson.proficiencies !== 'undefined' && itemJson.proficiencies.length > 0) && (
            <View>
              <Text><Text>Proficiencies</Text>: </Text>
              {this._renderlistAtribute(itemJson.proficiencies)}
            </View>
        )}

        {(typeof itemJson.proficiency_choices !== 'undefined'
          && typeof itemJson.proficiency_choices.from !== 'undefined' && itemJson.proficiency_choices.from.length > 0) && (
            <View>
              <Text><Text>Proficiency choices</Text>:</Text>
              <Text><Text>Can choose </Text>: {itemJson.proficiency_choices.choose}</Text>
              {this._renderlistAtribute(itemJson.proficiency_choices.from)}
            </View>
        )}
        {(typeof itemJson.saving_throws !== 'undefined' && itemJson.saving_throws.length > 0) && (
            <View>
              <Text><Text>Saving Throws</Text>: </Text>
              {this._renderlistAtribute(itemJson.saving_throws)}
            </View>
        )}

        {(typeof itemJson.subclasses !== 'undefined' && itemJson.subclasses.length > 0) && (
            <View>
              <Text><Text>Subclasses</Text>: </Text>
              {this._renderlistAtribute(itemJson.subclasses)}
            </View>
        )}

      </View>
    )
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
