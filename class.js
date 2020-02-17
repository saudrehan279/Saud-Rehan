import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking} from 'react-native';
import { lastFromTime } from 'uuid-js';
class Myname extends React.Component{
  render(){
    return(
      <View style={styles.new}>
  <Text style={styles.text}>{this.props.myname} {this.props.fathername} {this.props.rollno} {this.props.first}</Text>
  <Text style={styles.text}>{this.props.myname} {this.props.fathername} {this.props.rollno} {this.props.first}</Text>
      </View>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Myname
         myname={"Saud Rehan"}
        />
        <Myname
        fathername={"Rehan Khalid"}
        />
        <Myname
        rollno={"6117"}
        />
        
        
        

      </View>
    )
    
    
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    display:'flex',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  
  new: {
    backgroundColor: "orange",
    width: 100,
    height:50,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",  
    
  },
  text:{
    borderBottomColor: 'black',  
    borderBottomWidth: 2,
    borderStyle: 'solid',  
    
  },
});
 