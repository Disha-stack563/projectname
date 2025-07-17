import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import styles from "./styles";


export default class LoginScreen extends Component{

    handleNavigate=()=>{
        this.props.navigation.navigate("Bottom")
    }
    render(){
        return(
            <ImageBackground source={require("../../assets/images/background.jpg")}style={styles.imgbackground}>
            <View style={{marginLeft:20}}>
    <Text style={{color:"#ef4366",fontSize:80,marginTop:hp(10),paddingBottom:15}}>zepto</Text>
    <View>
<Text style={{color:"#fff",fontSize:30}}>Groceries </Text>
<Text style={{color:"#fff",fontSize:30}}>delivered in </Text>
<Text style={{paddingBottom:15,color:"#fff",fontSize:30}}>10 minutes</Text></View>
 <View>
    <TextInput placeholder="   +91  Enter Phone Number" style={{marginRight:20,marginTop:20,borderRadius:20,borderColor:"#fff",backgroundColor:"#fff",borderWidth:1}}></TextInput></View>
    <TouchableOpacity onPress={this.handleNavigate}>  
<Text style={{textAlign:"center",paddingTop:9,marginRight:20,marginTop:20,backgroundColor:"#f04c62",color:"#fff",fontSize:20,borderRadius:30,height:50}}>Continue</Text>
</TouchableOpacity>
            </View>
            <View style={{marginTop:185,marginLeft:90}}>
                <Text style={{color:"#fff"}}>By Continuing,you agree to our</Text>
                 <Text style={{color:"#f04c62"}}>Terms of Use & Privacy Policy</Text>
            </View>

</ImageBackground>
           
        )
    }
}
