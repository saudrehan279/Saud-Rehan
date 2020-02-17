import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity,Picker } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";

export default class App extends React.Component {
  state={
    mylang:'rnExpo',
  }
  render() {
    return (
      <View style={styles.container}> 
        <Text onPress={() => this.props.navigation.navigate('About')}>Screen One</Text>
        <Picker
        mode="dialog"
        style={{width:200}}
        selectedValue={this.state.mylang}
        onValueChange={(listnewvalue)=>{ this.setState({mylang:listnewvalue})}}
        >
          <Picker.Item label="React Native" value="rnExpo" />
          <Picker.Item label="Node js" value="nj" />
          <Picker.Item label="Firebase" value="gfb" />

        </Picker>
      </View>
          

    )
  }

}

