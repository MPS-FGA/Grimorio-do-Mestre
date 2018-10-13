import React, { Component } from "react";
import {Text, View, FlatList, ScrollView, ActivityIndicator, StyleSheet} from "react-native";
import {styles} from '../styles/PagStyles';



class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageInfo: [],
      item: [],
      rawJson: [],
      isLoading : false
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
    this.setState({isLoading: true});
    const response = await fetch(this.state.item.url);
    const json = await response.json();
    this.setState({ rawJson: json });
    this.setState({isLoading: false});
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
      <View >
        <Text style={{fontSize:40,
                      fontWeight: 'bold',
                      textAlign: "center"
                    }}>Coisas</Text >
        <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Speed</Text>: {itemJson.speed}</Text>
        <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Alignment</Text>: {itemJson.alignment}</Text>
        <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Age</Text>: {itemJson.age}</Text>
        <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}> {itemJson.size} - {itemJson.size_description}</Text>
        {(typeof itemJson.starting_proficiencies !== 'undefined' && itemJson.starting_proficiencies.length > 0) && (
            <View>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Starting Proficiencies</Text>: </Text>
              {this._renderlistAtribute(itemJson.starting_proficiencies)}
            </View>
        )}
        {(typeof itemJson.starting_proficiency_options !== 'undefined'
          && typeof itemJson.starting_proficiency_options.from !== 'undefined' && itemJson.starting_proficiency_options.from.length > 0) && (
            <View>
            <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Starting proficiency options</Text>:</Text>
            <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Can choose </Text>: {itemJson.starting_proficiency_options.choose}</Text>
              {this._renderlistAtribute(itemJson.starting_proficiency_options.from)}
            </View>
        )}
        <Text><Text>Languages Description</Text>: {itemJson.language_desc}</Text>
        {(typeof itemJson.languages !== 'undefined' && itemJson.languages.length > 0) && (
            <View>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Languages</Text>: </Text>
              {this._renderlistAtribute(itemJson.languages)}
            </View>
        )}
        {(typeof itemJson.traits !== 'undefined' && itemJson.traits.length > 0) && (
            <View>
            <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Traits</Text>: </Text>
              {this._renderlistAtribute(itemJson.traits)}
            </View>
        )}
        <Text><Text>Ability bonuses</Text>: {itemJson.ability_bonuses}</Text>
        {(typeof itemJson.subraces !== 'undefined' && itemJson.subraces.length > 0) && (
            <View>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Subraces</Text>: </Text>
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
        <Text style={{marginTop: 50,
                      fontSize:40,
                      fontWeight: 'bold',
                      textAlign: "center"
                      }}> Hit Points</Text >
        <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Hit dice:</Text> {itemJson.hit_die}</Text>
        {(typeof itemJson.proficiencies !== 'undefined' && itemJson.proficiencies.length > 0) && (
            <View style ={{alignItems: "center"}}>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Proficiencies</Text>:</Text>
              {this._renderlistAtribute(itemJson.proficiencies)}
            </View>
        )}

        {(typeof itemJson.proficiency_choices !== 'undefined'
          && typeof itemJson.proficiency_choices.from !== 'undefined' && itemJson.proficiency_choices.from.length > 0) && (
            <View style ={{alignItems: "center"}}>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold',textAlign: "center"}} >Proficiency choices</Text>:</Text>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold',textAlign: "center"}}>Can choose </Text>: {itemJson.proficiency_choices.choose}</Text>
              {this._renderlistAtribute(itemJson.proficiency_choices.from)}
            </View>
        )}
        {(typeof itemJson.saving_throws !== 'undefined' && itemJson.saving_throws.length > 0) && (
            <View style ={{alignItems: "center"}}>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Saving Throws</Text>: </Text>
              {this._renderlistAtribute(itemJson.saving_throws)}
            </View>
        )}

        {(typeof itemJson.subclasses !== 'undefined' && itemJson.subclasses.length > 0) && (
            <View style ={{alignItems: "center"}}>
              <Text style={{textAlign: "center"}}><Text style={{fontSize:22,fontWeight:'bold'}}>Subclasses</Text>: </Text>
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



export default DetailPage;
