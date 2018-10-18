import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  Text,
  View,
  Picker,
  TextInput } from "react-native";
import RACES from '../../data/Races';
import CLASSES from '../../data/Classes';
import { styles } from '../../styles/PagStyles';
import { Card } from 'react-native-elements'
import ListEmpty from '../general/ListEmpty'


class ReferenceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: CLASSES,
      races: RACES,
      referenceType: ""
    };
  }

  componentWillMount(){
    this.setState({referenceType: this.props.referenceType})
  }

  _renderItem = ({item}) => {

    let saving_throws = () => {
      let data = []
      for (saving_throw of item.saving_throws) {
        data.push("- ", saving_throw.name + "\n");
      }
      return data;
    }

    return  (
        <TouchableOpacity onPress={()=>this._onItemPress(item)} style={styles.referenceCardContainer}>
            <View style={styles.referenceCardTitleContainer}>
              <Text style={styles.referenceCardTitle}>
                {item.name}
              </Text>
            </View>

            <View style={styles.referenceCardInfoContainer}>
              {item.hit_die ? (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 3, borderColor: '#bbbbbb'}}>
                  <Image
                    style={styles.referenceCardImage}
                    source={require('../../../assets/imgs/hit_die.png')}
                  />
                  <Text style={styles.referenceCardInfoTextBold}>Hit Die:</Text>
                  <Text style={styles.referenceCardInfoText}>{item.hit_die}</Text>
                </View> ) : ( null ) }

              {item.saving_throws ? (
                <View style={styles.referenceCardInfo}>
                  <Image
                    style={styles.referenceCardImage}
                    source={require('../../../assets/imgs/shield.png')}
                  />
                  <Text style={styles.referenceCardInfoTextBold}>Saving Throws:</Text>
                  <Text style={styles.referenceCardInfoText}>{saving_throws()}</Text>
                </View> ) : ( null ) }

              {item.ability_bonuses ? (
                <View style={styles.referenceCardInfo}>
                  <Image
                    style={styles.referenceCardImage}
                    source={require('../../../assets/imgs/ability.png')}
                  />
                  <Text style={styles.referenceCardInfoTextBold}>Ability Bonuses</Text>
                  <Text style={styles.referenceCardInfoText}>{item.ability_bonuses}</Text>
                </View> ) : ( null ) }
              </View>

        </TouchableOpacity>
    )
  }

  _onItemPress = (item) => {
    this.props.navigation.navigate("ReferenceDetailScreen",
      { detailArg : { item : item, referenceType: this.props.referenceType} })
  }

  _renderContext(){
    let data = []
    if (this.state.referenceType === "Classes") {
      data = this.state.classes;
    } else {
      data = this.state.races;
    }

    return (
      <FlatList
        data={data}
        renderItem={this._renderItem}
        keyExtractor = { (item, index) => index.toString() }
        ListEmptyComponent = {<ListEmpty/>}
        ItemSeparatorComponent={()=>
          <View style={styles.referenceCardSeparator} />
        }
      />
    );
  }

  render() {
    return (
      <View style={styles.subContainer}>
        {this._renderContext()}
      </View>
    );
  }
}

export default ReferenceCard;
