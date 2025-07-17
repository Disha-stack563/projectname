import React from "react";
import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from "react-native-responsive-screen";


const styles1=StyleSheet.create({
    backimage1:{width:wp(100),height:hp(100)},
    backimage:{flex:1},
    main:{width:wp(95),height:hp(40),borderWidth:0.5,alignSelf:"center",borderRadius:20,backgroundColor:"white",marginTop:430,alignItems:"center"},
    text:{fontSize:28,fontWeight:"bold",width:wp(60),textAlign:"center"},
    main2:{width:wp(94),height:hp(5),backgroundColor:"#1fc2c4",alignItems:"center",marginTop:50},
    text1:{marginTop:4,fontSize:22,color:"white"},
    text2:{textAlign:"center",marginTop:20,fontWeight:"500"}


})
export default styles1