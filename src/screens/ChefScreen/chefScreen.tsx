import React, { Component } from "react";
import chefScreenStyle  from "./chefScreenStyle" ;
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import Data from "../../api/data2";
export default class ChefScreen extends Component{
     handleNavigate=()=>{
        this.props.navigation.navigate("pizza")
    }

     renderItem=({item})=>{
            return(
            <View style={{marginTop:wp(8)}}> 
                <Image source={item.Image}style={{height:40,width:40,marginRight:wp(10)}}/>
            </View>
            )
        }
         renderItem5=({item})=>{
            return(
            <View style={{marginTop:wp(8)}}> 
                <Image source={item.Image}style={{height:40,width:40,marginRight:wp(10)}}/>
            </View>
            )
        }
    render(){
        return(
            <>
<View style={chefScreenStyle.header}>
    <Text>location:Riyadh</Text>
    <Image source={require("../../assets/images/pppp.png")}style={chefScreenStyle.yellowbg}/>
</View>

<View style={chefScreenStyle.yellow}>
    <Text style={chefScreenStyle.explore}>Explore Big Brands and enjoy up to 60%off</Text>
    <Image source={require("../../assets/images/rice.png")}style={{marginTop:wp(10)}}/>
</View>
<View style={chefScreenStyle.boxes}>
    <View style={chefScreenStyle.whitebox}>
<Text style={{marginTop:wp(7),marginLeft:wp(2),width:wp(25),fontWeight:"bold"}} >Deal of the day </Text>
<Text style={{width:wp(30)}}>Delicious treat at up to $55.00 off </Text>
<Image source={require("../../assets/images/rice.png")}style={{marginLeft:wp(25),marginTop:wp(5)}}/>
    </View>
    <View style={chefScreenStyle.blackbox}>
<Text style={{ color:"#fff",marginTop:wp(7),marginLeft:wp(2),width:wp(25),fontWeight:"bold"}} >Buy 2 Get 1 free </Text>
<Text style={{ color:"#fff",width:wp(30)}}>Order 3 dishes & get 1 dish Free </Text>
<Image source={require("../../assets/images/rice.png")}style={{marginLeft:wp(25),marginTop:wp(5)}}/>
    </View>
</View>
<View style={chefScreenStyle.burgerbox}>
      <Image source={require("../../assets/images/rice.png")}style={{marginTop:wp(10),marginLeft:wp(15)}}/>
    <View style={{flexDirection:"column",marginLeft:wp(5),marginTop:wp(6)}}>
        <TouchableOpacity onPress={this.handleNavigate}>
     <Text style={{fontSize:wp(7),fontWeight:"bold"}}>50% off </Text></TouchableOpacity>
       <Text style={{fontSize:wp(3)}}>Discover treats </Text>
       </View>

</View>



<View style={chefScreenStyle.redblue}>
<View style={chefScreenStyle.redbox}>
    <View style={{flexDirection:"column",marginLeft:wp(7),marginTop:wp(5)}}> 
        <Text style={{color:"white"}}>Party For Two </Text>
        <Text style={{color:"white"}}> Party 300</Text>
    </View>

</View>
<View style={chefScreenStyle.bluebox}>
 <View style={{flexDirection:"column",marginLeft:wp(7),marginTop:wp(5),}}>
        <Text style={{color:"white"}}> 50% off*</Text>
        <Text style={{color:"white"}}> Party 300</Text>
    </View>
</View>
</View>
 <FlatList data={Data.datatype} renderItem={this.renderItem} horizontal/>
</>
        );
    }
}