import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
export default class App extends React.Component {
  state={
    statement:[
      {fname:"Saud" , lname:"Rehan" , course:"React Native"},
      {fname:"Ali" , lname:"Haider" , course:"React Native"}
    ]
    
  }

  statementlist() {
    
    return this.state.statement.map((val)=>{
      return(
      <Text>{val.fname}</Text>
      )
      
      } 
    )
       
    }
   
  render() {
    return (
      <View style={styles.container}>
          
        {this.statementlist()}
        
        
        </View>
          

    );
  }
}


   