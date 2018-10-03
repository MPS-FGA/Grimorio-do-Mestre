import React, { Component } from "react";
import { TouchableOpacity, FlatList, Text, View,StyleSheet,ScrollView } from "react-native";
import {styles} from '../styles/PagStyles';

const stylesDescription = StyleSheet.create({
  title :{
    fontSize:40,
    fontWeight: 'bold',
  }
});

class Description extends Component {
  state = {

  };
  static navigationOptions = ({ navigation }) => {
    return {
      // If it finds the title defined dynamically, uses it. If not, uses default message.
      title: navigation.getParam('title', 'Description'),
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.content}>
          <Text style={stylesDescription.title}>Hit Points:</Text>{'\n'}{'\n'}
            <Text style={{fontSize:22,fontWeight:'bold'}}>Hit Dice:</Text> 1d12 per barbarian level.{'\n'}{'\n'}
            <Text style={{fontSize:22,fontWeight:'bold'}}>Hit Points at 1st Level:</Text> 12 + your Constitution modifier.{'\n'}{'\n'}
            <Text style={{fontSize:22,fontWeight:'bold'}}>Hit Points at Higher Levels:</Text> 1d12 (or 7) + your Constitution modifier per barbarian level after 1st.{'\n'}{'\n'}
          <Text style={stylesDescription.title}>Proficiencies:</Text>{'\n'}{'\n'}
              <Text style={{fontSize:22,fontWeight:'bold'}}>Armor:</Text> Light armor, medium armor, shields.{'\n'}{'\n'}
              <Text style={{fontSize:22,fontWeight:'bold'}}>Weapons:</Text> Simple weapons, martial weapons.{'\n'}{'\n'}
              <Text style={{fontSize:22,fontWeight:'bold'}}>Tools:</Text> None.{'\n'}{'\n'}
              <Text style={{fontSize:22,fontWeight:'bold'}}>Saving Throws:</Text> Strength, Constitution.{'\n'}{'\n'}
              <Text style={{fontSize:22,fontWeight:'bold'}}>Skills:</Text> Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival.{'\n'}{'\n'}
        </Text>
      </View>
    </ScrollView>

    );
  }
}
export default Description;
