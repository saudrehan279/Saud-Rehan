import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";

class screen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text onPress={() => this.props.navigation.navigate('About')}>Screen One</Text>
      </View>
          

    )
  }

}

class screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          
        <Text onPress={() => this.props.navigation.navigate('Downloads')}>Screen Two</Text>
        
        
        </View>
          

    )
  }

}
class screen3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          
        <Text>Screen Three</Text>
        
        
        </View>
          

    )
  }

}
const myNav = createStackNavigator({
  Home:screen1,
  About:screen2,
  Downloads: screen3,
});
const myApp = createAppContainer(myNav);
export default myApp;