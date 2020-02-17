import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity, Button,TextInput,TouchableNativeFeedback,TouchableHighlight
} from 'react-native';
import { lastFromTime } from 'uuid-js';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './anime.js';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as Font from 'expo-font';
export default class App extends React.Component {
  
  render() {
    
    return (
      
      <View style={styles.container}>
        <LinearGradient
        colors={["#364f6b","#3fc1c9","#f5f5f5","#fc5185"]}
        style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:'center'}}
        >
          <ScrollView
          nestedScrollEnabled={true}
          >
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>

          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          
          >
            <View style={styles.mainview}>
          
          <View style={styles.view1}><Text style={{fontSize:50,}}>1</Text></View>
          <View style={styles.view2}><Text style={{fontSize:50,}}>2</Text></View>
          <View style={styles.view3}><Text style={{fontSize:50,}}>3</Text></View>
          <View style={styles.view4}><Text style={{fontSize:50,}}>4</Text></View>
          <View style={styles.view5}><Text style={{fontSize:50,}}>5</Text></View>
          <View style={styles.view6}><Text style={{fontSize:50,}}>6</Text></View>
          <View style={styles.view7}><Text style={{fontSize:50,}}>7</Text></View>
          </View>
          </ScrollView>
          </ScrollView>



        </LinearGradient>
          
        
        
        
        </View>
          

    )
  }

}

