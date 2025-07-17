import React from "react";
import { StyleSheet } from "react-native";


import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
const chefStyle =StyleSheet.create({
    chefboximg:{
        alignItems:"center",
        marginTop:wp(65)
    },
    chefbox:{
        fontSize:wp(10),
        paddingTop:wp(1),
        
    },
    copyRight:{
 marginTop:wp(88)
    }
});
export  default chefStyle;