import React, { Component } from "react";
import { FlatList, Image, Text, View,TextInput, ScrollView, ImageBackground } from "react-native";

import { widthPercentageToDP as wp ,heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";

import styles from "./assignStyle3";






export default class Assignment extends Component{
                render() {
        return(<>
        <View style={styles.products}>
<Image source={require("../../assets/icons/arrow.png")}style={styles.producticon}/>
<Text style={{fontWeight:"bold"}}>Products</Text>
<Image source={require("../../assets/icons/heart.png")}style={styles.producticon}/>
        </View>
    <ImageBackground style={styles.imgbg}>
        <View style={{alignItems:"center",marginTop:wp(3)}}>
        <Image source={require("../../assets/images/hoodieblack.jpg")}/>
        </View>
        <View style={{flexDirection:"row",}}>
           
<Image source={require("../../assets/images/front.jpg")}style={styles.img}/>
            
 <Image source={require("../../assets/images/backk.jpg")}style={styles.img}/>               
            
 <Image source={require("../../assets/images/side.jpg")}style={styles.img}/>               
            
<Image source={require("../../assets/images/sidee.jpg")}style={styles.img}/>                
            
        </View>
        </ImageBackground>    
        <View style={{marginTop:wp(15),flexDirection:"row",justifyContent:"space-between",marginLeft:wp(7)}}>
            <View>
<Text style={{color:"#1fcec4",fontWeight:"bold"}}>Adidas</Text>
<Text style={{fontSize:wp(5),fontWeight:"bold"}}>Full sleeves Hoodie</Text>
            </View>
            <View style={styles.rs}>
        <Text style={{color:"#fff",textAlign:"center",paddingTop:wp(3)}}>Rs. 4000</Text>        
            </View>
        </View>
        <Text style={styles.size}>Select:Size</Text>
        <View style={{flexDirection:"row",margin:wp(5)}}>
            <View style={styles.sizee}>
<Text style={{fontWeight:"bold"}}>S</Text>
            </View>
             <View style={styles.sizee}>
 <Text style={{fontWeight:"bold"}}>M</Text>               
            </View>
             <View style={styles.sizee}>
    <Text style={{fontWeight:"bold"}}>L</Text>            
            </View>
             <View style={styles.sizee}>
    <Text style={{fontWeight:"bold"}}>XL</Text>            
            </View>
             <View style={styles.sizee}>
    <Text style={{fontWeight:"bold"}}>XXL</Text>            
            </View>
        </View>
        <Text style={styles.des}>Description</Text>
        <Text style={{width:wp(95),marginLeft:wp(5),marginTop:wp(5)}}>A hoodie is a comfortable, long-sleeved sweatshirt with a hood, often featuring a front 
            pocket and drawstrings. Perfect for casual wear,
             it provides warmth and style for all seasons.</Text>
             <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={styles.down}>
<Text style={styles.cart}>Add to cart</Text>
                </View>
                <View style={styles.down}>
         <Text  style={styles.cartt}>Buy now</Text>           
                </View>
             </View>
        </>)}}