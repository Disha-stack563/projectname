import React from "react"
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";


const styles=StyleSheet.create({
searchView:{flexDirection:"row",justifyContent:"space-between",height:wp(12),width:wp(75),
    marginLeft:wp(5),backgroundColor:"#fff",marginTop:wp(4),borderRadius:wp(2)},
 search:{height:wp(12),width:wp(12),borderRadius:wp(2),
    marginRight:wp(2),marginTop:wp(4),alignItems:"center",backgroundColor:"#fff", marginLeft:wp(2)}
 })
 export default styles