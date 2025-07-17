import React, { Component } from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
// import pizzaStyle  from "./pizzaStyle" ;
import Data from "../../api/data2";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
export default class PizzaScreen extends Component{
      renderItem2=({item})=>{
                return(
                <View  style={{flexDirection:"row",margin:wp(8)}}> 
                    <Image source={item.Image} style={{width:wp(5),height:wp(5),}}/>
                    <Text style={{marginLeft:5}}>{item.name}</Text>
                </View>
                )
            }
             renderItem3=({item})=>{
                return(
                <View  > 
                    <Image source={item.Image} style={{width:wp(30),height:wp(30),margin:wp(5)}} />
                    
                </View>
                )
            }
              renderItem4=({item})=>{
                return(
                <View  > 
                    <Image source={item.Image} style={{width:wp(30),height:wp(30),margin:wp(5)}} />
                    
                </View>
                )
            }
            renderItem=({item})=>{
                        return(
                        <View style={{marginTop:wp(8)}}> 
                            <Image source={item.Image}style={{height:40,width:40,marginRight:wp(10)}}/>
                        </View>
                        )
                    }
    render(){
        return(<>
        <ScrollView>
           <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{marginLeft:wp(2)}} >
            <Text style={{marginTop:wp(3),fontSize:wp(5)}}>Hi Hungries</Text>
           <Text style={{fontWeight:"bold",fontSize:wp(8)}}>welcome Back....</Text>
           </View> 
           <Image source={require("../../assets/images/menu.png")}style={{marginRight:wp(4),marginTop:wp(7),width:wp(8),height:wp(8)}}/>
           </View>
           <View style={{marginTop:wp(5),borderRadius:wp(2),marginLeft:wp(4),width:wp(90),height:wp(10),backgroundColor:"#f1f4ef",flexDirection:"row",justifyContent:"space-between"}}>
            <TextInput placeholder="location:E-189 TDS Tower"style={{width:wp(80)}}/>
            <View style={{backgroundColor:"yellow",height:wp(10),width:wp(10),alignItems:"center",borderRadius:wp(2)}}>
            <Image source={require("../../assets/images/search.png")} style={{height:wp(4),width:wp(4),marginTop:wp(3)}}/>
           </View></View>
           <View style={{flexDirection:"row",backgroundColor:"yellow",width:wp(88),marginTop:wp(9),
        height:wp(30),marginLeft:wp(6),borderBottomRightRadius:wp(15),borderTopLeftRadius:wp(15)}}>
    <Text style={{width:wp(40),margin:wp(5),marginRight:wp(18),marginTop:wp(8),fontWeight:"bold"}}>50% off for Large Pizza Tasty Pizza At Home</Text>
    <Image source={require("../../assets/images/pizza.jpg")}style={{marginTop:wp(5),height:wp(20),width:wp(20)}}/>
</View>
<Text style={{marginTop:wp(5),marginLeft:wp(5),fontWeight:"bold"}}>Restaurents Near Me</Text>
<View>
<FlatList data={Data.datatype2}renderItem={this.renderItem2}horizontal />
</View>
<View>
    <Text style={{fontWeight:"bold",marginLeft:wp(5)}}>Delivery with in 30 minutes</Text>
</View>
<View>
<FlatList data={Data.datatype3}renderItem={this.renderItem3}horizontal /></View>
<View>
<Text style={{fontWeight:"bold",marginLeft:wp(4)}}>  Less than $3.00</Text></View>
<View>
<FlatList data={Data.datatype4}renderItem={this.renderItem4}horizontal /></View>
 <FlatList style={{margin:wp(3)}} data={Data.datatype} renderItem={this.renderItem} horizontal/>
 </ScrollView>
</>
        )
    }
}