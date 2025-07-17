import React, { Component } from "react";


import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import styles from "./style1";
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Data from "../../api/dataCars";
import ImageSlider from 'react-native-image-slider';

export default class CarScreen extends Component{
//    constructor(){
//     super()
//     this.state={
//         images:[
//             require("../../assets/images/bmw.jpg"),
//             require("../../assets/images/OIP.jpg")

//         ]
//     }
//    }
    handleNavigate=()=>{
        this.props.navigation.navigate("Bottom")
    }
    renderCars=({item})=>{
            return(
 <View style={{margin:wp(4),height:wp(30),width:wp(30),backgroundColor:"#fff",alignItems:"center"}}>
      <Image source={item.Image}style={{height:wp(20),width:wp(20),marginTop:wp(2)}}/>
                 <Text>{item.name}</Text>
                </View>
            )
        }
          renderCar=({item})=>{
            return(
                <>
 <View style={{margin:wp(4),height:wp(40),width:wp(55),backgroundColor:"#fff",alignItems:"center"}}>
      <Image source={item.Image}style={{height:wp(30),width:wp(40),marginTop:wp(2)}}/>
 <Image source={item.Image1}style={{position:"absolute",height:wp(8),marginTop:wp(3),marginLeft:wp(35),width:wp(8)}}/>  

                 <Text>{item.name}</Text>
                </View>
              
                </>
            )
        }
    render(){
        return(
<>
<ScrollView>
    <View style={{backgroundColor:"#d3d3d3"}}>
    <ImageBackground source={require('../../assets/images/bluebg.jpg')}style={styles.bg}>
<View style={{flexDirection:"row",marginTop:wp(6)}}>
    <Image source={require('../../assets/images/wilson.jpg')}style={styles.img}/>
    <View style={{flexDirection:"column"}}>
        <Text style={{color:"#fff"}}>Good Morning!</Text>
        <Text style={{color:"#fff",fontSize:wp(6)}}>Wilson AH</Text>
    </View>
    <View style={{marginLeft:wp(38),borderWidth:wp(0.3),borderRadius:wp(5),
        height:wp(9),width:wp(9),borderColor:"#fff",alignItems:"center"}}>
    <Image source={require('../../assets/icons/return.png')}style={styles.return}/></View>
</View>
<View style={styles.searchView}>
    <TextInput placeholder="       Search Here...." />
    <View style={styles.search}>
    <Image source={require("../../assets/icons/searc.png")}style={{height:wp(5),width:wp(5),
        marginTop:wp(2.5)}}/></View>
</View>

    </ImageBackground>
    
    <View> 
<ImageBackground source={require("../../assets/images/bluebg.jpg")}style={{width:wp(90),height:wp(55),
    marginTop:wp(15),marginLeft:wp(5),alignItems:"center"}}>
    <Text style={{color:"#fff",marginTop:wp(4)}}>Find Your Perfect Car</Text>
    <Text  style={{color:"#fff",fontSize:wp(6)}}>World of Luxury Automobiles</Text>
    <Image source={require('../../assets/images/carwhite.jpg')}style={styles.white}/>
</ImageBackground>
 
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:wp(5),
        marginRight:wp(5),marginLeft:wp(5)}}>
        <Text style={{fontSize:wp(6)}}>
            Popular Categories
        </Text>
        <TouchableOpacity onPress={this.handleNavigate}>
        <Text style={{color:"blue",paddingTop:wp(2)}}>
            View More
        </Text></TouchableOpacity>
    </View>
<FlatList data={Data.cars} renderItem={this.renderCars} horizontal/>
 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:wp(5),
        marginRight:wp(5),marginLeft:wp(5)}}>
        <Text style={{fontSize:wp(6)}}>
            Feature Car Listings
        </Text>
        
        <Text style={{color:"blue",paddingTop:wp(2)}}>
            View More
        </Text>
    </View>
    <View>
        
<FlatList data={Data.car} renderItem={this.renderCar} horizontal/>
    
</View>
</View>

</ScrollView>
  {/* <ImageSlider
          loopBothSides
          autoPlayWithInterval={1000}
          images={this.state.images}/>  */}
</>
        )
    }
    }
