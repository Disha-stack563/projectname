import React, { Component } from "react";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import Data from "../../api/dataCars";
import { FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./CarStyle3";

export default class CarScreen3 extends Component{
    
    renderlist=({item})=>{
                return(<>
                <View style={{margin:wp(4),height:wp(50),width:wp(40),backgroundColor:"#fff"}}>

    <Image source={item.Image1} style={{height:wp(7),width:wp(7),marginLeft:wp(25),marginTop:wp(2)}}/>
    <Image source={item.Image}style={{height:wp(20),width:wp(40)}}/>
    <View style={{marginTop:wp(5),marginLeft:wp(2)}}>
    <Text>{item.name}</Text>
<Text>{item.price}</Text></View>
</View>

                 </>
                )
            }
    render(){
        return(<>
        <ScrollView>
        <View style={{backgroundColor:"#d3d3d3"}}>
            <View style={{flexDirection:"row",marginTop:wp(5),marginBottom:wp(4)}}>
                            <Image source={require('../../assets/icons/leftarrow.png')}style={{height:wp(5),marginLeft:wp(5),width:wp(6),marginTop:wp(1)}}/>
                            <Text style={{marginLeft:wp(26),fontWeight:"bold",fontSize:wp(5)}}>Car Listing</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
<View style={styles.searchView}>
    <TextInput placeholder="       Search Here...." /></View>
    <View style={styles.search}>
    <Image source={require("../../assets/icons/equalizer.png")}style={{height:wp(7),width:wp(7),
        marginTop:wp(2.5)}}/></View>
</View>
<FlatList data={Data.list} renderItem={this.renderlist} numColumns={2}/>
</View></ScrollView>
     </>   )
    }
}