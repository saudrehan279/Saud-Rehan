import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { lastFromTime } from 'uuid-js';
import styles from './anime.js';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground>
        </View>
          

          <View style={styles.main}>
            <ScrollView horizontal={true}>

              <View style={styles.one}>
                <View style={styles.icon1}><Image style={styles.bell} source={require("./assets/bell.png")}></Image></View>
                <View style={styles.noti}><Text style={styles.notification}>Notifications</Text>
                  <Text style={styles.news}>10 Alerts</Text>
                </View>
              </View>
              <View style={styles.two}>
                <View style={styles.icon2}><Image style={styles.calender} source={require("./assets/event.png")}></Image></View>
                <View style={styles.invite}><Text style={styles.five}>Events</Text>
                  <Text style={styles.news}>5 Invites</Text></View>
              </View>
              <View style={styles.three}>
                <View style={styles.icon2}><Image style={styles.calender} source={require("./assets/news.jpg")}></Image></View>
                <View style={styles.invite}><Text style={styles.five}>News</Text>
                  <Text style={styles.news}>15 News</Text></View>
              </View>
            </ScrollView>


          </View>

          <View style={styles.main2}>
            <ScrollView>


              <View style={styles.collection1}>
                <View style={styles.ali}>
                  <View style={styles.picture}><Image style={styles.cap} source={require("./assets/anime2.jpg")}></Image></View>
                  <View style={styles.pro}>
                    <View style={styles.nametime}>
                      <Text style={styles.id}>Ali Ahmad</Text>
                      <Text style={styles.time}>1 hour ago</Text>
                    </View>
                    <View style={styles.menu}>
                      <Image style={styles.dots} source={require("./assets/dots.png")}></Image>
                    </View>

                  </View>
                </View>
                <View style={styles.post}>
                  <View style={styles.photo1}><Image style={styles.flower1} source={require("./assets/flower1.jpg")}></Image></View>
                  <View style={styles.halfphoto}>
                    <View style={styles.photo2}><Image style={styles.flower2} source={require("./assets/flower2.jpg")}></Image></View>
                    <View style={styles.photo3}><Image style={styles.flower3} source={require("./assets/flower3.jpg")}></Image></View>
                  </View>
                </View>
                <View style={styles.like}>
                  <Image style={styles.heart} source={require("./assets/heart.jpg")}></Image>
                  <Image style={styles.message} source={require("./assets/message.png")}></Image>
                  <Image style={styles.share} source={require("./assets/share.png")}></Image>
                </View>
              </View>
              <View style={styles.collection2}>
                <View style={styles.ali}>
                  <View style={styles.picture}><Image style={styles.cap} source={require("./assets/anime3.jpg")}></Image></View>
                  <View style={styles.pro}>
                    <View style={styles.nametime}>
                      
                        <Text style={styles.id}>Ali Haider</Text>
                      
                      <Text style={styles.time}>5 hours ago</Text>
                    </View>
                    <View style={styles.menu}>
                
                      <Image style={styles.dots} source={require("./assets/dots.png")}></Image>
                      

                    </View>

                  </View>
                </View>
                <View style={styles.post}>
                  <View style={styles.photo1}><Image style={styles.car1} source={require("./assets/car1.jpg")}></Image></View>
                  <View style={styles.halfphoto}>
                    <View style={styles.photo2}><Image style={styles.car2} source={require("./assets/car2.jpg")}></Image></View>
                    <View style={styles.photo3}><Image style={styles.car3} source={require("./assets/car3.jpg")}></Image></View>
                  </View>
                </View>
                <View style={styles.like}>
                  <Image style={styles.heart} source={require("./assets/heart.jpg")}></Image>
                  <Image style={styles.message} source={require("./assets/message.png")}></Image>
                  <Image style={styles.share} source={require("./assets/share.png")}></Image>
                </View>
              </View>
              <View style={styles.collection3}>
                <View style={styles.ali}>
                  <View style={styles.picture}><Image style={styles.cap} source={require("./assets/anime4.jpg")}></Image></View>
                  <View style={styles.pro}>
                    <View style={styles.nametime}>
                      <Text style={styles.id}>Rana Sagar</Text>
                      <Text style={styles.time}>3 hours ago</Text>
                    </View>
                    <View style={styles.menu}>
                      <Image style={styles.dots} source={require("./assets/dots.png")}></Image>
                    </View>

                  </View>
                </View>
                <View style={styles.post}>
                  <View style={styles.photo1}><Image style={styles.landscape1} source={require("./assets/landscape1.jpg")}></Image></View>
                  <View style={styles.halfphoto}>
                    <View style={styles.photo2}><Image style={styles.landscape2} source={require("./assets/landscape2.jpg")}></Image></View>
                    <View style={styles.photo3}><Image style={styles.landscape3} source={require("./assets/landscape3.jpg")}></Image></View>
                  </View>
                </View>
                <View style={styles.like}>
                  <Image style={styles.heart} source={require("./assets/heart.jpg")}></Image>
                  <Image style={styles.message} source={require("./assets/message.png")}></Image>
                  <Image style={styles.share} source={require("./assets/share.png")}></Image>
                </View>
              </View>
              <View style={styles.collection4}>
                <View style={styles.ali}>
                  <View style={styles.picture}><Image style={styles.cap} source={require("./assets/anime5.jpg")}></Image></View>
                  <View style={styles.pro}>
                    <View style={styles.nametime}>
                      <Text style={styles.id}>Bilal Ansari</Text>
                      <Text style={styles.time}>2 hours ago</Text>
                    </View>
                    <View style={styles.menu}>
                      <Image style={styles.dots} source={require("./assets/dots.png")}></Image>
                    </View>

                  </View>
                </View>
                <View style={styles.post}>
                  <View style={styles.photo1}><Image style={styles.furniture1} source={require("./assets/furniture1.jpg")}></Image></View>
                  <View style={styles.halfphoto}>
                    <View style={styles.photo2}><Image style={styles.furniture2} source={require("./assets/furniture2.jpg")}></Image></View>
                    <View style={styles.photo3}><Image style={styles.furniture3} source={require("./assets/furniture3.jpg")}></Image></View>
                  </View>
                </View>
                <View style={styles.like}>
                  <Image style={styles.heart} source={require("./assets/heart.jpg")}></Image>
                  <Image style={styles.message} source={require("./assets/message.png")}></Image>
                  <Image style={styles.share} source={require("./assets/share.png")}></Image>
                </View>
              </View>

            </ScrollView>


          </View>
          </View>




        </ImageBackground>
      </View>
    )


  }



}