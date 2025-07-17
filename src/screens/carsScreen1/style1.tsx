import React from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";


const styles=StyleSheet.create({
bg:{
    height:wp(30)
},
img:{
    height:wp(15),
    width:wp(15),
    borderRadius:wp(8),
    marginLeft:wp(3),
    marginRight:wp(3)
},
return:{
    height:wp(6),
    width:wp(6),
   marginTop:wp(1),
   
},
searchView:{flexDirection:"row",justifyContent:"space-between",height:wp(12),width:wp(90),
    marginLeft:wp(5),backgroundColor:"#fff",marginTop:wp(4),borderRadius:wp(2)},
 search:{backgroundColor:"#000",height:wp(10),width:wp(10),borderRadius:wp(2),
    marginRight:wp(2),marginTop:wp(1),alignItems:"center"},
    white:{height:wp(30),marginTop:wp(3),width:wp(55)}
})
export default styles