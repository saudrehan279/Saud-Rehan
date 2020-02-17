import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity, Button,TextInput,TouchableNativeFeedback
} from 'react-native';
import { lastFromTime } from 'uuid-js';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './anime.js';
export default class App extends React.Component {
  state={
    data:[],
    textvalue:null,
    
  }
  async fetchData(){
    await fetch("https://jsonplaceholder.typicode.com/posts/"+this.state.textvalue)
    .then(abc=> abc.json())
    .then(xyz=> this.setState({data:xyz}))
  }
  renderData(){
    return(
    
               <View>
               
               <Text>{this.state.data.id}</Text>
               <Text>{this.state.data.title}</Text>
               <Text>{this.state.data.body}</Text>
               

            </View>
    )
    
  }
  render() {
    
    return (
      
      <View style={styles.container}>
        <LinearGradient
        colors={["#D9514EFF","#2A2B2DFF","#2DA8D8FF"]}
        style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:'center'}}
        >
          
          <View style={styles.button}>
          <TouchableOpacity
          onPress={()=> this.fetchData()}
          >
          <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{alignItems: 'center', borderRadius: 5 ,height:40}}
          
          >
            <Text
             style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
              textAlign:"center",
              marginTop:12,
              
            }}
            
            >Get Data</Text>
          </LinearGradient>
          </TouchableOpacity>
          </View>
          <TextInput placeholder={"Input Value"} style={styles.textinput}
          value={this.state.textvalue}
          
          onChangeText={(value)=> {this.setState({textvalue:value})}}
          
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.renderData()}
            {console.log(this.state.textvalue)}
            
          </ScrollView>




        </LinearGradient>
          
        
        
        
        </View>
          

    )
  }

}