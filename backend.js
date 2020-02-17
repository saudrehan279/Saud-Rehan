import React from 'react';
import { CheckBox, Modal, StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, ProgressBarAndroid,ActivityIndicator } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class screen1 extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./assets/pngtree.jpg")} style={styles.background}>


          <View style={{ width: "100%", height: 100, display: "flex", alignItems: "center", marginTop: 100, }}><Image source={require("./assets/coral.png")} style={styles.loginpng}></Image></View>

          <View style={styles.loginmain}>

            <TextInput placeholder="Username" style={styles.username}></TextInput>
            <TextInput placeholder="Password" style={styles.password} secureTextEntry></TextInput>

            <View style={styles.button}><TouchableOpacity
              onPress={() => this.props.navigation.navigate("Feed")}
            ><Image source={require("./assets/arrow.png")} style={styles.arrow}></Image></TouchableOpacity></View>
          </View>
          <View style={styles.forgotview}><TouchableOpacity><Text style={styles.forgottext}>Forgot?</Text></TouchableOpacity></View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
            <View style={styles.register}><Text style={styles.registertext} >Register</Text></View>
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
        <ImageBackground source={require("./assets/pngtree.jpg")} style={styles.background}>

          <View style={{ width: "100%", height: 100, display: "flex", alignItems: "center", marginTop: 100, }}><Image source={require("./assets/reg.png")} style={styles.regpng}></Image></View>
          <View style={styles.regmain}>

            <TextInput placeholder="Username" style={styles.usernamereg}></TextInput>
            <TextInput placeholder="Password" style={styles.passwordreg}
              secureTextEntry></TextInput>
            <TextInput placeholder="Email" style={styles.emailreg}></TextInput>

            <View style={styles.buttonreg}><TouchableOpacity onPress={() => this.props.navigation.navigate("Feed")}><Image source={require("./assets/tick.png")} style={styles.tick}></Image></TouchableOpacity></View>
          </View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
            <View style={styles.login}><Text style={styles.logintext} >Login</Text></View>
          </TouchableOpacity>



        </ImageBackground>



      </View>


    )
  }

}

class screen3 extends React.Component {
  // state = {
  //   images: [],
  //   myModal: false,
  //   mycb: false,

  // }
  // async fetchData() {
  //   await fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(abc => abc.json())
  //     .then(xyz => this.setState({ images: xyz }))
  // }
  // mylist() {
  //   return this.state.images.map((val, ind) => {
  //     return <View key={ind}>
  //       <Text style={styles.userid}>•  {val.title}:</Text>
  //       <Text style={styles.body}>{val.body}</Text>

  //     </View>
  //   });
  // }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./assets/pngtree.jpg")} style=

          {styles.background}>
          {/* <TouchableOpacity
            onPress={() => { this.setState({ myModal: !this.state.myModal }) }}
          >
            <Text
              style={styles.modaltext}

            >My Modal</Text>
          </TouchableOpacity>
          <Modal
            visible={this.state.myModal}
          >
            <View style={styles.container}>
              <Text>Hi this is my modal body</Text>
              <TouchableOpacity onPress={() => { this.setState({ myModal: !this.state.myModal }) }}>
                <Text
                  style={styles.closemodal}
                >Close Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <CheckBox
            onValueChange={() => { this.setState({ mycb: !this.state.mycb }) }}
            value={this.state.mycb}
          ></CheckBox> */}

          <ScrollView

            showsVerticalScrollIndicator={false}
          >
            {/* <TouchableOpacity onPress={() => { this.fetchData() }}>

              <Text style={{ margin: 20, }}>
                Get Data
              </Text>
              {this.mylist}

            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Get Data") }}>
              <Text style={styles.closemodal}>Screen4</Text>
            </TouchableOpacity>



          </ScrollView>


        </ImageBackground>



      </View>


    )
  }

}



class screen4 extends React.Component {
  state = {
    mydata: [],
    
  }
  async backdata() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(abc => abc.json())
      .then(xyz => this.setState({ mydata: xyz }))
  }
  alldata() {
    return this.state.mydata.map((val, ind) => {
      return <View key={ind}>
        <Text>{ind}</Text>
        <Text>{val.title}</Text>
        <Text>{val.userid}</Text>
        <Text>{val.body}</Text>

      </View>
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./assets/pngtree.jpg")} style={styles.background}>
         
          <ScrollView showsVerticalScrollIndicator={false}>
          <Button 
           title={"Call Data"}
           color={"orange"}
           onPress={()=> this.backdata()}
          />
         
          
          {this.alldata()}
          </ScrollView> 


        </ImageBackground>



      </View>


    )
  }

}




const mynav = createStackNavigator({
  // Login: screen1,
  // Register: screen2,
  // Feed: screen3,
  "Get Data": screen4,
});
const myapp = createAppContainer(mynav);
export default myapp;