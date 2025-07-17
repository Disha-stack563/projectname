import React from "react";
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen";




const styles=StyleSheet.create({
products:
    {flexDirection:"row",justifyContent:"space-between",margin:wp(9)},
producticon:{height:wp(5),width:wp(5)},
imgbg:{backgroundColor:"#1fcec4",height:wp(65),width:wp(100)},
img:{height:wp(20),width:wp(20),margin:wp(2)},
rs:{backgroundColor:"#000",width:wp(25),borderTopLeftRadius:wp(4),borderBottomLeftRadius:wp(4)},
size:{color:"#1fcec4",fontWeight:"bold",fontSize:wp(6),marginTop:wp(5),marginLeft:wp(5)},
sizee:{backgroundColor:"#d3d3d3",height:wp(12),width:wp(12),alignItems:"center",paddingTop:wp(3),borderRadius:wp(4),marginRight:wp(4)},
des:{fontWeight:"bold",fontSize:wp(8),marginLeft:wp(5)},
down:{backgroundColor:"#000",marginTop:wp(2),height:wp(30),width:wp(50)},
cart:{color:"#fff",fontSize:wp(6),textAlign:"center",paddingTop:wp(3)},
cartt:{fontSize:wp(6),textAlign:"center",paddingTop:wp(3),backgroundColor:"#1fcec4",height:wp(17),color:"#fff"},
})


export default styles