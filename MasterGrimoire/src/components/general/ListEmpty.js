import React, { Component } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from '../../styles/PagStyles';

class ListEmpty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
          <Text>Tem nada aqui não lek</Text>
      </View>
    );
  }
}

export default ListEmpty;
