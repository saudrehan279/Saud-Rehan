import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
export default class App extends React.Component {
  state = {
    statement: [
      { name: "Saud Rehan", rollno: "6117", city: "Gojra" },
      { name: "Ali Haider", rollno: "6118", city: "Faislabad" },
      { name: "Ali Raza", rollno: "6119", city: "Toba Tek Singh" },
      { name: "Mohammad Bilal", rollno: "6120", city: "Multan" },
      { name: "Mohammad Talha", rollno: "6121", city: "Gujrat" },
      { name: "Arslan Malik", rollno: "6122", city: "Rawalpindi" },
      { name: "Osama Nadeem", rollno: "6123", city: "Lahore" },
      { name: "Ali Arshad", rollno: "6124", city: "Karachi" },
      { name: "Wahab Batt", rollno: "6125", city: "Kamalia" },
      { name: "Kashif Ali", rollno: "6126", city: "Peshawar" }
    ]
  }
  statementlist() {
    return this.state.statement.map((value) => {
      return (
        
        <View>
          

          <Text style={styles.text}>{value.name+"              "+value.rollno+"              "+value.city}</Text>
        </View>

      )
    }
    )

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.div}>
        <Text style={styles.info}>Name</Text>
        <Text style={styles.info2}>Roll No</Text>
        <Text style={styles.info3}>City</Text>
        </View>


        {this.statementlist()}



      </View>


    )
  }

}