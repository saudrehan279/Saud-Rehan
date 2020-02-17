import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking} from 'react-native';
import { lastFromTime } from 'uuid-js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground style={styles.image} source={require('./assets/698623.png')}>
            
            <View style={styles.name}>
              <Text style={styles.saud}>Name</Text>
              <Text style={styles.slogan}>A slogan of the app,how is this app</Text>
              <Text style={styles.help}>helping the world</Text>
            </View>
            <View style={styles.email}>
              <Text style={styles.em} onPress={() => Linking.openURL("http://www.gmail.com/")}>Continue with Email</Text>
            </View>
            <View style={styles.facebook}>
            <Text style={styles.fb} onPress={() => Linking.openURL("http://www.facebook.com/")}>Continue with Facebook</Text>
            </View>
            <View style={styles.google}>
            <Text style={styles.go} onPress={() => Linking.openURL("http://www.google.com/")}>Continue with Google</Text>
            </View>
            <View style={styles.sign}>
              <Text style={styles.acc}>Already have an Account?</Text>
              <Text style={styles.in}>Sign in.</Text>
            </View>
            </ImageBackground>     
      </View>);
    
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image:{
    width:"100%",
    height:"100%",
    position: "absolute",
  },
  
  name:{
    width:"100%",
    height: 200,
    marginTop: 150,
    
  
  },
  saud:{
    fontSize: 65,
    marginLeft: 115,
    marginTop: 15,
    
  },
  slogan:{
    fontSize: 25,
    marginLeft: 35,
    marginTop: 22,
  },
  help:{
    fontSize: 25,
    marginLeft: 110,
    marginTop: 2,
  },
  email: {
    width:"70%",
    height: 50,
    backgroundColor: "black",
    marginTop: 75,
    marginLeft: 55,
    borderRadius: 6,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  },
  em: {
    fontSize: 22,
    color: "white",
  },
  facebook:{
    width:"70%",
    height: 50,
    backgroundColor: "black",
    marginTop: 40,
    marginLeft: 55,
    borderRadius: 6,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  fb:{
      fontSize: 22,
      color: "white",
  },
  google:{
    width:"70%",
    height: 50,
    backgroundColor:"black",
    marginTop: 40,
    marginLeft: 55,
    borderRadius: 6,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  },
  go:{
      fontSize: 22,
      color: "white",
  },
  sign:{
    width:"70%",
    height: 20,
    marginTop: 22,
    marginLeft: 55,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

  },
  acc: {
    marginLeft: 26,
    fontSize: 18,
  },
  in:{
      marginLeft: 3,
      color: "blue",
      fontSize: 18,
  }
  
  
});
 