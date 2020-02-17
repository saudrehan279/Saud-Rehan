import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity, PickerItem, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
class screen1 extends React.Component {
  state={
    images:[],
  }
  async componentDidMount(){
   await fetch("https://jsonplaceholder.typicode.com/photos")
    .then( convertjson => convertjson.json() )
    .then( givejson => this.setState({images:givejson}))
  }
  myList(){
    return this.state.images.map((val,ind)=>{
     return (<View key={ind}><Text>{val.title}</Text></View>)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundimage}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <Image source={require("./assets/shopping.png")} style={styles.shopping} ></Image>
            <Text style={styles.shoppingtext}>Shopping</Text>
          </TouchableOpacity>





        </ImageBackground>
      </View>


    )
  }

}
class screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundimage}>
          <Image source={require("./assets/login.png")} style={styles.loginimage}></Image>
          <View style={{
            height: 160,
            width: "100%", display: "flex", alignItems: "center", marginTop: 50,
          }}>
            <KeyboardAvoidingView>
              <TextInput style={styles.input1} placeholder="Email"></TextInput>
              <TextInput style={styles.input2} placeholder="Password" secureTextEntry></TextInput>
            </KeyboardAvoidingView>
          </View>
          <View style={{
            width: "100%", height: 70, display: "flex",
            flexDirection: "row", justifyContent: "space-around", marginTop: 20,
          }}>
            <TouchableOpacity>
              <View style={styles.signin}><Text style={{ fontSize: 30, marginLeft: 11, marginTop: 6, }}>Sign In</Text></View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.signup}><Text style={{ fontSize: 30, marginLeft: 11, marginTop: 6, }} onPress={() => this.props.navigation.navigate("SignUp")}>Sign Up</Text></View>
            </TouchableOpacity>

          </View>
        </ImageBackground>

      </View>
    )
  }

}
class screen3 extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundimage}>

          <Image source={require("./assets/signup1.png")} style={{ width: 270, height: 90, marginTop: 50, }}></Image>

          <TextInput placeholder="First Name" style={styles.firstname}></TextInput>
          <TextInput placeholder="Last Name" style={styles.lastname}></TextInput>
          <TextInput placeholder="Email" style={styles.email}></TextInput>
          <TextInput placeholder="Password" secureTextEntry style={styles.password}></TextInput>
          <TextInput placeholder="ReType Password" secureTextEntry style={styles.repassword}></TextInput>

          <TouchableOpacity>
            <View style={styles.ok}><Text style={{ fontSize: 40, marginLeft: 27, marginTop: 2, }} onPress={() => this.props.navigation.navigate("Login")}>OK</Text></View>
          </TouchableOpacity>

        </ImageBackground>
      </View>

    )
  }
}
class screen4 extends React.Component {
  render() {
    //console.log(this.state.images)
    return (
      <View>
        <ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundimage}>
         
            <View style={styles.itemframemain}>
              <ScrollView>
              {this.myList()}
              </ScrollView>
            </View>
          
        </ImageBackground>
      </View>
    )
  }
}
const MyNav = createStackNavigator({
  //"Shopping Site":screen1,
  //Login:screen2,
  //SignUp:screen3,
  Items: screen4,
});
const myApp = createAppContainer(MyNav);
export default myApp;