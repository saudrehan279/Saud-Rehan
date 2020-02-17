import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default firstlec;
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.one}>First View</Text>
        </View>

        <View style={styles.second}>
        <Text style={styles.two}>Second View</Text> 
        </View>
        


      </View>);
    
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    
    justifyContent: 'space-around',
    flexDirection: "row",
    display: 'flex',
    alignItems: "center"



  },
  new:{
    color: 'yellow',
  },
  div: {
    width: 150,
    height: 150,
    backgroundColor: 'orange',
    marginLeft: 0,
    marginTop: 0,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 4,
    
    
   
  },
  one: {
    marginLeft: 38,
    marginTop: 62,
    fontSize: 20,
  },
  second: {
    width:150,
    height: 150,
    backgroundColor: 'lime',
    marginRight: 0,
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: 'black',
    borderWidth: 4,
    
  },
  two: {
    marginLeft: 35,
    marginTop: 62,
    fontSize: 20,

  }
});
