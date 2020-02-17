import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { lastFromTime } from 'uuid-js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.first}>
        <View style={styles.logo}><Text style={styles.saud}>Saud</Text></View>
          <View style={styles.list}>
            <Text style={styles.all}>Home</Text>
            <Text style={styles.all}>About</Text>
            <Text style={styles.all}>Downlad</Text>
            <Text style={styles.all}>Contact</Text>
            
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.one}>
            <View style={styles.oneleft}>
              <Text style={styles.text}>Easy Load</Text>
            </View>
            <View style={styles.onerigth}>
            <Text style={styles.text}>Bundles</Text>
            </View>
          </View>
          <View style={styles.two}>
          <View style={styles.twoleft}>
          <Text style={styles.text}>Offers</Text>
          </View>
          <View style={styles.tworigth}>
          <Text style={styles.text}>Internet</Text>
          </View>
          </View>
        </View>
        <View style={styles.third}>
          <Text style={ styles.rights}>All Rights Reserved!</Text>
        </View>
        
        


      </View>);
    
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
    


   
  },
  first: {
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    marginTop: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 4,
  },
  list:{
    backgroundColor:"red",
    width: "65%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    
  },
  all: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderStyle: "solid",
    fontSize: 19,
  },
  logo:{
    backgroundColor: "red",
    width: "35%",
    height: 50,
    
    
  },
  saud: {
    fontSize: 40,
    marginLeft: 20,
    marginTop: 0,
    fontStyle: "italic",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    width: 74,
    borderRadius: 12,
    backgroundColor: "darkgrey",
    
    
    
  },
  
  second: {
    width: "100%",
    height: 450,
    backgroundColor: "black",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 3,

    

  },
  one: {
    width: "100%",
    height: 225,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 3,
    borderBottomColor: "black",
    borderStyle: "solid",
  },
  oneleft: {
    width: 150,
    height: 160,
    backgroundColor: "grey",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  onerigth: {
    width: 150,
    height: 160,
    backgroundColor: "grey",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  two: {
    width: "100%",
    height: 225,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderTopWidth: 3,
    borderTopColor: "black",
    borderStyle: "solid",
  },
  twoleft: {
    width: 150,
    height: 160,
    backgroundColor: "grey",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  tworigth: {
    width: 150,
    height: 160,
    backgroundColor: "grey",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "black",
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  text: {
    fontSize: 30,
    borderLeftColor: "black",
    borderLeftWidth: 3,
    borderRightColor: "black",
    borderRightWidth: 3,
    borderStyle: "solid",
    paddingLeft: 5,
    
    

    
  },
  third: {
    width: "100%",
    height: 175,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 4,

    
  },
  rights:{
    color: "white",
    marginTop: 130,
    fontSize: 20,
  },
  
});
 