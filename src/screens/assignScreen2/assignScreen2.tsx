import React, { Component } from "react";
import { FlatList, Image, Text, View,TextInput, ScrollView, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp ,heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
import styles2 from "./assignStyle2";
import styles from "./assignStyle2";






export default class AssignS extends Component{
    handleNavigate=()=>{
        this.props.navigation.navigate("cloths")
    }
                render() {
        return(<>
       
            <View>
            <View style={styles.continer}>
            <Image source={require("../../assets/icons/bell.png")} style={styles.bag}/>
            <TextInput placeholder="Searchsgdhgsdh" style={styles.Search}></TextInput>
            <Image source={require("../../assets/icons/briefcase.png")} style={styles.bag}/>
            </View>
            <View style={styles.color}>
                <View>
                <Image source={require('../../assets/images/hoodie.jpg')} style={styles.hoodie}/>
               </View>
            
                <View>

                
                <Text style={styles.lines}>Introducing our Spring Collection</Text>
                <Text style={styles.lines2}>Discover our new spring collection</Text>
               <View style={styles.color2}>
                <Text style={styles.button}>clickhere</Text>
               </View>

               </View>
               </View>

               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={styles.shop}>Shop by categary</Text>
                <Text style={{marginTop:15,marginRight:10,fontWeight:"bold"}}>See All</Text>
               </View>
               </View>
            <View style={styles.brands}>
                <View >
                    <Image source={require("../../assets/icons/adidas.png")}style={{marginRight:wp(2)}}/>
                </View>
                <View>
                    <Image source={require("../../assets/icons/nike.png")}style={{marginRight:wp(2)}}/>
                </View>
                <View >
                    <Image source={require("../../assets/icons/dell.png")}style={{marginRight:wp(2)}}/>
                </View>
                <View >
                    <Image source={require("../../assets/icons/puma.png")}style={{marginRight:wp(2)}}/>
                </View>
                <View>
                    <Image source={require("../../assets/icons/apple.png")}style={{marginRight:wp(2)}}/>
                </View>
            </View>
            <View style={styles.trend}>
                <Text style={{color:"#1fc2c4",fontWeight:"heavy",fontSize:wp(5)}}>Trending</Text>
                <Text style={{fontWeight:"bold"}}>See All</Text>
            </View>
    <View style={{flexDirection:"row",margin:wp(3),alignItems:"center"}}>
        <TouchableOpacity onPress={this.handleNavigate}>
        <View style={styles.hoodiebg}>
<Image source={require("../../assets/images/hoodieblack.jpg")}style={styles.hoodieimg}/>
<Text style={{marginTop:wp(5),textAlign:"center"}}>Black solied hoodie</Text>
        </View></TouchableOpacity>
        <View style={styles.hoodiebg}>
 <Image source={require("../../assets/images/hoodieorange.jpg")}style={styles.hoodieimg}/>   
 <Text style={{marginTop:wp(5),textAlign:"center"}}>Orange hoodie</Text>        
        </View>
    </View>
    <View style={styles.trend}>
        <Text style={{color:"#1fc2c4",fontWeight:"heavy",fontSize:wp(5)}}>Suggested for you</Text>
        <Text style={{fontWeight:"bold"}}>See All</Text></View>
        <View style={{backgroundColor:"#1fc2c4",flexDirection:"row",height:wp(12),alignItems:"center"}}>
            <Image source={require("../../assets/icons/home.png")}style={{height:wp(10),width:wp(10),marginRight:wp(12),marginLeft:wp(13)}}/>
            <Image source={require("../../assets/icons/love.png")}style={{height:wp(10),width:wp(10),marginRight:wp(12)}}/>
             <Image source={require("../../assets/icons/user.png")}style={{height:wp(10),width:wp(10),marginRight:wp(12)}}/>
             <Image source={require("../../assets/icons/bagg.png")}style={{height:wp(10),width:wp(10),marginRight:wp(12)}}/>
        
    </View>
       </> )
    }
    }