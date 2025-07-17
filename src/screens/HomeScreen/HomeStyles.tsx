import React from "react";
import { StyleSheet } from "react-native";

import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
const HomeStyles=StyleSheet.create({
    
    zeptoSuper:{
       backgroundColor:"#000",
       height:wp(12),
       marginTop:wp(1),
       borderRadius:50,
       textAlign:"center",
       paddingTop:6,
       width:wp(57),
       color:"#fff",
       fontSize:20
    },
    zepto:{fontSize:30,
        paddingLeft:49}
    ,
    Slider:{backgroundColor:"#fff",
        height:wp(14),width:wp(93),
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:wp(10),margin:wp(4)}

    ,
    header:{
        height:wp(7),
        backgroundColor:"#fff",
        width:wp(40),
        marginLeft:wp(30),
        marginTop:wp(2),
        borderRadius:20,
        textAlign:"center",
        paddingTop:2,
    },
    userimg:{height:wp(10) ,width:wp(10),marginLeft:wp(5)},
   delivery:{color:"#fff",fontWeight:"bold",paddingTop:5,paddingLeft:wp(5),fontSize:wp(5)},
   get:{backgroundColor:"#fff",borderRadius:wp(5),height:wp(10),width:wp(20),
    textAlign:"center",paddingTop:6,marginLeft:wp(10)},
   icecreamimg:{height:wp(7),width:wp(7),backgroundColor:"#fff",marginTop:10,marginLeft:20},
   iceview:{flexDirection:"row",backgroundColor:"#fff",margin:15,borderRadius:15},
   ice:{height:wp(10),width:wp(11)},
   free:{fontSize:40,color:"yellow",textAlign:"center"},
   today:{textAlign:"center",fontSize:15,color:"#fff"},
   deliveryimg:{height:wp(40),width:wp(40),marginRight:20},
   lowest:{height:wp(40),width:wp(40)},
    avail:{
       width:wp(75),
        backgroundColor:"#fff",
        borderRadius:20,
        textAlign:"center",
        paddingTop:2,
        marginLeft:wp(14)
    },
})

export default HomeStyles