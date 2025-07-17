import React, { Component } from "react";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import Data from "../../api/dataCars";
import { FlatList, Image, Text, View } from "react-native";

export default class CarScreen2 extends Component{
   
    handleNavigate=()=>{
        this.props.navigation.navigate("Categories")
    }
    
        renderCars=({item})=>{
                return(
     <View style={{margin:wp(4),height:wp(30),width:wp(30),backgroundColor:"#ffff",alignItems:"center"}}>
          <Image source={item.Image}style={{height:wp(20),width:wp(20),marginTop:wp(2)}}/>
                     <Text>{item.name}</Text>
                    </View>
                )
            }
             renderCarr=({item})=>{
                return(
     <View style={{margin:wp(4),height:wp(25),width:wp(25),backgroundColor:"#ffff",alignItems:"center"}}>
          <Image source={item.Image}style={{height:wp(17),width:wp(17),marginTop:wp(2)}}/>
                     <Text>{item.name}</Text>
                    </View>
                )
            }
    render(){
        return(<>
        <View style={{backgroundColor:"#d3d3d3",height:wp(210)}}>
            <View style={{flexDirection:"row",marginTop:wp(5),marginBottom:wp(4)}}>
                <Image source={require('../../assets/icons/leftarrow.png')}style={{height:wp(5),marginLeft:wp(5),width:wp(6)}}/>
                <Text style={{marginLeft:wp(20),fontWeight:"bold",fontSize:wp(5)}}>Explore Categories</Text>
            </View>
            <FlatList data={Data.explore} renderItem={this.renderCarr} numColumns={3}/>
</View>
       </> )
    }
}