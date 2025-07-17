import React, { Component } from "react"
import CheckBox from 'react-native-check-box'

export default class Checkbox extends Component{
constructor(){
        super()
        this.state={
            isChecked:''
        }
        
    }
    render() {
        return(
               <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    rightText={"CheckBox"}
    checkedCheckBoxColor="blue"
/>
        )
    }
}