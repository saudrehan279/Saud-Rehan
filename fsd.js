import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity,Picker, PickerItem } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
import { createAppContainer} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";

class screen1 extends React.Component {
  state={
    new2:"Country"
  }
  
  render() {
    return (
      <View> 
      <ImageBackground style={{width:"100%", height:"100%", display:"flex",}} source={require("./assets/clouds.jpg")}>
        <Picker
        style={{width:170,marginTop:400, marginLeft:100,height:50,backgroundColor:"white"}}
        mode="dialog"
        selectedValue={this.state.new2}
        onValueChange={(listnewvalue)=>this.setState({new2:listnewvalue})}
        
        >
          <Picker.Item label="Country" value="country" />
          <Picker.Item label="Pakistan" value="pak" />
          <Picker.Item label="Iran" value="irn" />
          <Picker.Item label="Egypt" value="egy" />
          <Picker.Item label="Turkey" value="tur" />
          <Picker.Item label="Afganistan" value="afg" />
          <Picker.Item label="Saudi Arabia" value="sau" />

        </Picker>
        
        
        <Text style={{fontSize:40, marginTop:30,marginLeft:140,backgroundColor:"white", borderRadius: 40,width:80,height:44, textAlign:"center",}} onPress={()=>this.props.navigation.navigate("Province")}>OK</Text>
      </ImageBackground>  
      </View>
          

    )
  }

}
class screen2 extends React.Component {
  state={
    new:"Province",

  }
  render() {
    return (
      <View style={styles.container}> 
      <ImageBackground style={{width:"100%", height:"100%"}} source={require("./assets/clouds.jpg")}>
        
        <Picker
        mode="dialog"
        style={{width:170, marginTop:400, marginLeft:100,height:50,backgroundColor:"white"}}
        selectedValue={this.state.new}
        onValueChange={(listnewvalue)=>{this.setState({new:listnewvalue})}}
        >
          <Picker.Item label="Province" value="Province" />
          <Picker.Item label="Punjab" value="pun" />
          <Picker.Item label="Sindh" value="sin"/>
          <Picker.Item label="Balochistan" value="balo"/>
          <Picker.Item label="KPK" value="kpk"/>
          <Picker.Item label="Gilgit Baltistan" value="gb"/>
          

        </Picker>
        <Text style={{fontSize:40, marginTop:30,marginLeft:140,backgroundColor:"white", borderRadius: 40,width:80,height:44, textAlign:"center",}} onPress={()=>this.props.navigation.navigate("City")}>OK</Text>
        
        <View><Text>OK</Text></View>
      </ImageBackground>  
      </View>
          

    )
  }

}
class screen3 extends React.Component {
  state={
    new:"City",

  }
  render() {
    return (
      <View style={styles.container}> 
      <ImageBackground style={{width:"100%", height:"100%"}} source={require("./assets/clouds.jpg")}>
        
        <Picker
        mode="dialog"
        style={{width:170, marginTop:400, marginLeft:100,height:50,backgroundColor:"white"}}
        selectedValue={this.state.new}
        onValueChange={(listnewvalue)=>{this.setState({new:listnewvalue})}}
        >
          <Picker.Item label="City" value="City" />
          <Picker.Item label="Gojra" value="goj" />
          <Picker.Item label="Faislabad" value="fsd"/>
          <Picker.Item label="Pensra" value="pen"/>
          <Picker.Item label="Toba Tek Singh" value="ttk"/>
          <Picker.Item label="Multan" value="mul"/>
          <Picker.Item label="Sadhar" value="sdh"/>

        </Picker>
        <Text style={{fontSize:40, marginTop:30,marginLeft:140,backgroundColor:"white", borderRadius: 40,width:80,height:44, textAlign:"center",}} onPress={()=>this.props.navigation.navigate("City Information")}>OK</Text>
        

      </ImageBackground>  
      </View>
          

    )
  }

}
class screen4 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
     
      <ScrollView>
      <Text style={{fontSize:40,textAlign:"center"}} >Faisalabad Info</Text>
     <Text style={{fontSize:30, marginTop:30, textAlign: "center"}}>Faisalabad (Urdu: فیصل آباد‎; English: /fɑːɪsɑːlˌbɑːd/), formerly known as Lyallpur, is the third-most-populous city in Pakistan, and the second-largest in the eastern province of Punjab. Historically one of the first planned cities within British India, it has long since developed into a cosmopolitan metropolis. Faisalabad was restructured into city district status; a devolution promulgated by the 2001 local government ordinance (LGO). The total area of Faisalabad District is 5,856 km2 (2,261 sq mi)[4] while the area controlled by the Faisalabad Development Authority (FDA) is 1,280 km2 (490 sq mi).[5][6]:8 Faisalabad has grown to become a major industrial and distribution centre because of its central location in the region and connecting roads, rails, and air transportation.[7] It has been referred to as the "Manchester of Pakistan".[8][9] Faisalabad contributes over 20 percent of Punjab's GDP, and has an average annual GDP of $20.5 billion.[10] Agriculture and industry remain its hallmark.[11][6]:41

The surrounding countryside, irrigated by the lower Chenab River, produces cotton, wheat, sugarcane, maize, vegetables and fruits. The city is an industrial centre with major railway repair yards, engineering works, and mills that process sugar, flour, and oil seed. Faisalabad is a major producer of superphosphates, cotton and silk textiles, hosiery, dyes, industrial chemicals, beverages, clothing, pulp and paper, printing, agricultural equipment, and ghee (clarified butter). The Faisalabad Chamber of Commerce and Industry monitors industrial activity in the city and reports their findings to the Federation of Pakistan Chamber of Commerce and Industry and provincial government. The city has a major dry port and international airport.

Faisalabad is home to the University of Agriculture, Government College University as well as the Ayub Agricultural Research Institute, Beaconhouse School System, Divisional Public School Faisalabad and National Textile University. The city has its own cricket team, Faisalabad Wolves, which is based at the Iqbal Stadium.[12] There are several other sports teams that compete internationally, including hockey and snooker as well as other sporting events.[13]</Text>
        
        
      
      </ScrollView>
      
     
      
      </View>
          

    )
  }

}
const MyNav= createStackNavigator({
  Country:screen1,
  Province:screen2,
  City:screen3,
  "City Information":screen4,

});
const myApp = createAppContainer(MyNav);
export default myApp;

