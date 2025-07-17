import React from "react";
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen";




const styles=StyleSheet.create({
     continer:{flexDirection:"row",marginLeft:20,marginTop:5},
bell:{width:20,height:20,marginTop:5},
Search:{borderWidth:0.5,borderColor:"#000",width:290,height:7,borderRadius:10,margin:5},
bag:{width:20,height:13,marginTop:20},
color:{height:150,width:360,marginTop:5,backgroundColor:"#1fc2c4",flexDirection:"row"},
lines:{fontSize:20,fontWeight:"bold",width:200,marginLeft:26,color:"#fff",marginTop:10},
lines2:{width:180,fontWeight:"bold",marginLeft:26},
color2:{borderWidth:0.5,width:90,height:22,borderRadius:10,marginLeft:60,backgroundColor:"#000",textAlign:"center",marginTop:10},
button:{color:"#fff",textAlign:"center"},
hoodie:{width:wp(50),height:hp(20)},
shop:{marginLeft:20,marginTop:15,fontSize:20,color:"#1fc2c4"},
brands:{flexDirection:"row",marginLeft:wp(3),marginTop:wp(6)},
trend:{flexDirection:"row",justifyContent:"space-between",margin:wp(4)},
hoodiebg:{backgroundColor:"#d3d3d3",marginRight:wp(5),height:wp(65),width:wp(45)},
hoodieimg:{width:wp(40),height:wp(50),marginLeft:wp(2)}
})
export default styles