import React, { Component } from "react";
import {Text, View, FlatList, ScrollView, ActivityIndicator} from "react-native";
import { styles } from '../styles/PagStyles';
import Header from '../components/general/Header';

class ReferenceDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      referenceType: "",
      item : null
    };
  }

  static navigationOptions = ({ navigation }) => {
    let title = navigation.getParam('title', 'Options Available')
    return {
      header: <Header title={title} navigation={navigation}/>,
    };
  };

  componentWillMount(){
    const { detailArg } = this.props.navigation.state.params
    this.props.navigation.setParams({title: detailArg.item.name})
    this.setState({referenceType: detailArg.referenceType})
    this.setState({item: detailArg.item})
  }

  _renderDetail (){
    switch(this.state.referenceType) {
    case 'Races':
      renderedItem = this._renderRace();
      break;
    case 'Classes':
      renderedItem = this._renderClass();
      break;
    default:
      renderedItem = <Text>Cannot render.</Text>
      break;
    }

    return(renderedItem);
  }

  _renderRace = () => {
    let item = this.state.item;

    return(
      <View style={styles.container}>
        <Text><Text>Speed</Text>: {item.speed}</Text>
        <Text><Text>Alignment</Text>: {item.alignment}</Text>
        <Text><Text>Age</Text>: {item.age}</Text>
        <Text><Text>Size</Text>: {item.size} - {item.size_description}</Text>
        {(typeof item.starting_proficiencies !== 'undefined' && item.starting_proficiencies.length > 0) && (
            <View>
              <Text>Starting Proficiencies: </Text>
              {this._renderlistAtribute(item.starting_proficiencies)}
            </View>
        )}
        {(typeof item.starting_proficiency_options !== 'undefined'
          && typeof item.starting_proficiency_options.from !== 'undefined' && item.starting_proficiency_options.from.length > 0) && (
            <View>
              <Text><Text>Starting proficiency options</Text>:</Text>
              <Text><Text>Can choose </Text>: {item.starting_proficiency_options.choose}</Text>
              {this._renderlistAtribute(item.starting_proficiency_options.from)}
            </View>
        )}
        <Text><Text>Languages Description</Text>: {item.language_desc}</Text>
        {(typeof item.languages !== 'undefined' && item.languages.length > 0) && (
            <View>
              <Text><Text>Languages</Text>: </Text>
              {this._renderlistAtribute(item.languages)}
            </View>
        )}
        {(typeof item.traits !== 'undefined' && item.traits.length > 0) && (
            <View>
              <Text><Text>Traits</Text>: </Text>
              {this._renderlistAtribute(item.traits)}
            </View>
        )}
        <Text><Text>Ability bonuses</Text>: {item.ability_bonuses}</Text>
        {(typeof item.subraces !== 'undefined' && item.subraces.length > 0) && (
            <View>
              <Text><Text>Subraces</Text>: </Text>
              {this._renderlistAtribute(item.subraces)}
            </View>
        )}
      </View>
    )

  }

  _renderClass = () => {

    let item = this.state.item;
    return(
      <View>
        <Text><Text  >Hit dice</Text>: {item.hit_die}</Text>
        {(typeof item.proficiencies !== 'undefined' && item.proficiencies.length > 0) && (
            <View>
              <Text><Text>Proficiencies</Text>: </Text>
              {this._renderlistAtribute(item.proficiencies)}
            </View>
        )}

        {(typeof item.proficiency_choices !== 'undefined'
          && typeof item.proficiency_choices.from !== 'undefined' && item.proficiency_choices.from.length > 0) && (
            <View>
              <Text><Text >Proficiency choices</Text>:</Text>
              <Text><Text>Can choose </Text>: {item.proficiency_choices.choose}</Text>
              {this._renderlistAtribute(item.proficiency_choices.from)}
            </View>
        )}
        {(typeof item.saving_throws !== 'undefined' && item.saving_throws.length > 0) && (
            <View>
              <Text><Text>Saving Throws</Text>: </Text>
              {this._renderlistAtribute(item.saving_throws)}
            </View>
        )}

        {(typeof item.subclasses !== 'undefined' && item.subclasses.length > 0) && (
            <View>
              <Text><Text>Subclasses</Text>: </Text>
              {this._renderlistAtribute(item.subclasses)}
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

  _renderContext(){
    if(this.state.isLoading == true){
      return (
          <ActivityIndicator size="large" color="#0000ff" />
      )
    }else{
      return (
          this._renderDetail()
      )
    }
  }

  render() {
      return(
        <ScrollView >
          {this._renderContext()}
        </ScrollView>
      )
  }

}

export default ReferenceDetailScreen;
