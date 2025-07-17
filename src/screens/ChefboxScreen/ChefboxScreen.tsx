import React, { Component } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import chefStyle  from "./chefStyle" ;

export default class ChefboxScreen extends Component{
     handleNavigate=()=>{
        this.props.navigation.navigate("chef")
    }
    render(){
        return(
           
         <ImageBackground source={require("../../assets/images/OIP.jpg")}style={{flex:1}}>
     
          <View style={chefStyle.chefboximg}>
            <Image source={require("../../assets/images/reception.png")}/>
            <View style={{flexDirection:"row"}}>
                <Image source={require("../../assets/images/menu.png")}/>
                <TouchableOpacity  onPress={this.handleNavigate}>
                <Text style={chefStyle.chefbox}>ChefBox</Text> </TouchableOpacity>
            </View>
            <Text style={chefStyle.copyRight}>All copyright reserved@ ChefBox</Text>
            </View>
         </ImageBackground>
        );
    }

        
    }

