import React, { Component }  from "react";
import { Text, View ,Image} from "react-native";





export default class HomeComponent1 extends Component{
    render(){
        const {item}=this.props
        return(
            <View style={{margin:15}}>
                <Image source={item.Image}style={{height:25,width:25}}/>
                <Text style ={{color:"#fff"}}>{item.name}</Text>
            </View>
        )
    }
}