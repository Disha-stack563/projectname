import React, { Component } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import styles1 from "./assignStyle";






export default class Assign extends Component{
    handleNavigate=()=>{
        this.props.navigation.navigate("assign")
    }
    render(){
        return(
            <View style={styles1.backimage1}>
                <ImageBackground source={require('../../assets/images/men.jpg')} style={styles1.backimage}>

                <View style={styles1.main}>
                    <Text style={styles1.text}>Discover Your Unique Style</Text>
                    <Text style={styles1.text2}>A "unie style" paragraph, often seen in academic writing, focuses on a single idea and is structured with a topic sentence, supporting details, and a concluding sentence.</Text>
                    <TouchableOpacity onPress={this.handleNavigate}>
                    <View style={styles1.main2}>

                        <Text style={styles1.text1}>LOGIN</Text>


                    </View>
</TouchableOpacity>
                </View>
                
                </ImageBackground>
                
            </View>
        )
    }
}