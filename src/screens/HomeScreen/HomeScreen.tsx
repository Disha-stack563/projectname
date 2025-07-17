import React, { Component } from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { widthPercentageToDP as wp ,heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
import Data from "../../api/data";
import HomeStyles from "./HomeStyles";
import styles from "../LoginScreen/styles";
import HomeComponent1 from "../../components/homecomponent2/HomeComponent1";

export default class HomeScreen extends Component{
    
    handleNavigate=()=>{
        this.props.navigation.navigate("Listing")
    }
    
   
    renderItem=({item})=>{
        return(
<HomeComponent1 item={item}/>
        )
    }
     renderProducts=({item})=>{
        return(
            <View style={{margin:wp(4)}}>
                <Image source={item.Image}style={{height:wp(14),width:wp(13)}}/>
            </View>
        )
    }
     renderProducts2=({item})=>{
        return(
            <View style={{margin:wp(4)}}>
                <Image source={item.Image}style={{height:wp(14),width:wp(14)}}/>
                <Text style ={{color:"#000"}}>{item.name}</Text>
            </View>
        )
    }
     renderProducts5=({item})=>{
        return(
            <View style={{margin:wp(4),backgroundColor:"#fff",height:wp(64),width:wp(42),borderRadius:wp(5)}}>
                <Image source={item.Image}style={{height:wp(30),width:wp(35),margin:wp(4)}}/>
                <View style={{margin:wp(2)}}>
                <Text style={{borderColor:"#f333e7",borderWidth:wp(1),textAlign:"center"}}>{item.description}</Text>
                <View style={{margin:wp(2)}}><Text >{item.name}</Text>
                <Text >{item.price}</Text></View></View>
            </View>
        )
    }

    render(){
        return(
          <>
          <ScrollView>
<ImageBackground source={ require("../../assets/images/bg.jpg")}>
<View style={HomeStyles.Slider}>
    <View style={{flexDirection:"row"}}>
        <TouchableOpacity  onPress={this.handleNavigate}>
        <Text style={HomeStyles.zepto}>zepto</Text></TouchableOpacity>
        <Text style={HomeStyles.zeptoSuper}>Zepto Super Saver</Text>
        </View>
</View>

<View>
<Text style={HomeStyles.header}> Ensuring safe delivery</Text>
</View>

<View style={{flexDirection:"row",marginTop:wp(2)}}>
    <Image source={require("../../assets/images/user.png")} style={HomeStyles.userimg} />
    <Text style={HomeStyles.delivery}>Delivery in 2 minutes</Text>
    <Text style={HomeStyles.get}>Get</Text>
</View>
<View style={{flexDirection:"row"}}>
<View style={{flexDirection:"row",backgroundColor:"#fff",margin:wp(4),borderRadius:wp(4),height:wp(12)}}>
    <Image source={require("../../assets/images/search.png")}style={HomeStyles.icecreamimg}/>
    <TextInput  placeholder="Search the items"style={{width:wp(40)}} />

    </View>
    <View style={HomeStyles.iceview}>
        <Text style={{textAlign:"center",paddingTop:8}}>   Ice-cream</Text>
        <Image source={require("../../assets/images/ice-cream.png")}style={HomeStyles.ice}/>
    </View>
</View>
<FlatList data={Data.datatype} renderItem={this.renderItem} horizontal/>
<View>
<Text style={HomeStyles.free}>Rs125 Free Cash</Text>
<Text style={{color:"#fff",textAlign:"center"}}>Just for you</Text>
<FlatList data={Data.datatype2} renderItem={this.renderProducts} horizontal/>
</View>
<Text style={HomeStyles.today}> Offer valid only for today!</Text>

</ImageBackground>
<ImageBackground source={require("../../assets/images/OIP.jpg")} style={{flex:1}}>
<View style={{flexDirection:"row",margin:wp(8)}}>
    <Image source={require("../../assets/images/delivery.jpg")}style={HomeStyles.deliveryimg}/>
    
    <Image source={require("../../assets/images/lowest.jpg")}style={HomeStyles.lowest}/>
</View>
<View >
<Text style={HomeStyles.avail}>Avail these exclusive benefits with daily</Text>
</View>
<FlatList data={Data.datatype3} renderItem={this.renderProducts2} horizontal/>
<FlatList data={Data.product} renderItem={this.renderProducts5}horizontal/>
</ImageBackground>
</ScrollView>
</>
        )
    }
}