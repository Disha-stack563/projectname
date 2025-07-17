import OTPInputView from "@twotalltotems/react-native-otp-input"
import React, { Component } from "react"
import { Text, View } from "react-native"
import styles from "./OtpStyle"






export default class OtpScreen extends Component{
    constructor(){
        super()
        this.state={
            otp:""
        }
    }
    render(){
        const{otp}=this.state
        return(
            <View>
                <Text>rapido</Text>
                <Text>number</Text>
                <Text>enter</Text>
                <OTPInputView
                style={{width:"80%",height:60,alignSelf:"center"}}
                pinCount={4}
                
                autoFocusOnLoad
                codeInputFieldStyle={styles.base}
                codeInputHighlightStyle={styles.highlight}
                onCodeChanged={(code)=>{
                    this.setState({otp:code});
                }}
                onCodeFilled={(code)=>{
                    this.setState({otp:code});
                }}
                />
            </View>
        )
    }
        
    }
