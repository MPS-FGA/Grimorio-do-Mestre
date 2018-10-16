import React, { Component } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../../styles/PagStyles';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  headerImage(){
    if (this.props.navigation.state.routeName === "MainScreen") {
      return(
        <View style={styles.headerLogoContainer}>
          <Image
            style={styles.headerLogo}
            source={require('../../../assets/imgs/logo.png')}
          />
        </View>
      );
    } else{
      return(
        <View style={styles.headerBackContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.headerImage}
              source={{uri: 'https://png.icons8.com/ios/100/ffffff/back.png'}}
            />
          </TouchableOpacity>
        </View>);
    }
  }

  render() {
    let title = this.props.title;

    return (
      <View style={styles.headerContainer}>
        {this.headerImage()}

        <View style={styles.headerTitleContainer}>
          <Text style={ styles.headerTitle }>{title}</Text>
        </View>

      </View>
    );
  }
}

export default Header;
