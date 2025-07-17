import React, { Component } from "react";
import { StyleSheet } from "react-native";


import Data from "../../api/data2";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
const chefScreenStyle =StyleSheet.create({
   header:{
justifyContent:"space-between",
flexDirection:"row",
marginHorizontal:wp(8),
marginTop:wp(3)
   },
   yellowbg:{height:20,width:20},
    yellow:{flexDirection:"row",backgroundColor:"yellow",width:wp(88),marginTop:wp(5),
height:wp(30),marginLeft:wp(6),borderBottomRightRadius:wp(15),borderTopLeftRadius:wp(15)},
explore:{width:wp(30),margin:wp(5),marginRight:wp(25),marginTop:wp(8)},
boxes:{
    flexDirection:"row",
    
},
whitebox:{borderWidth:2,borderBottomRightRadius:wp(15),marginLeft:wp(3),
    borderTopLeftRadius:wp(15),height:wp(55),width:wp(45),marginTop:wp(7)},
blackbox:{backgroundColor:"#000",borderBottomRightRadius:wp(15),marginLeft:wp(5),
    borderTopLeftRadius:wp(15),height:wp(55),width:wp(45),marginTop:wp(7)},

    burgerbox:{flexDirection:"row",backgroundColor:"yellow",width:wp(88),marginTop:wp(8),
height:wp(30),marginLeft:wp(6),borderBottomRightRadius:wp(15),borderTopLeftRadius:wp(15)},
redblue:{flexDirection:"row"},
redbox:{borderBottomRightRadius:wp(15),marginLeft:wp(3),
    borderTopLeftRadius:wp(15),height:wp(23),width:wp(45),marginTop:wp(7),
backgroundColor:"red"
},
bluebox:{
backgroundColor:"blue",borderBottomRightRadius:wp(15),marginLeft:wp(5),
    borderTopLeftRadius:wp(15),height:wp(23),width:wp(45),marginTop:wp(7)
}
});
export  default chefScreenStyle;