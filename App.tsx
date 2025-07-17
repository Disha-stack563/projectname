import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ChefboxScreen from "./src/screens/ChefboxScreen/ChefboxScreen";
import ChefScreen from "./src/screens/ChefScreen/chefScreen";
import PizzaScreen from "./src/screens/pizzaScreen/PizzaScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import TakePicture from "./src/screens/cameraScreen/cameraScreen";
import OtpScreen from "./src/screens/OtpScreen/OtpScreen";
import Checkbox from "./src/screens/checkBox/checkBox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DateTime from "./src/screens/DateTimeScreen/DateTime";
import Test from "./src/screens/DateTimeScreen/DateTime";
import CarScreen from "./src/screens/carsScreen1/carsScreen1";
import CarScreen2 from "./src/screens/carScreen2.tsx/carScreen2";
import CarScreen3 from "./src/screens/CarScreen3/CarScreen3";



// // navigationtab
// const Stack=createNativeStackNavigator()
// export default function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}}>
//         <Stack.Screen name="Login" component={LoginScreen}/>
//         <Stack.Screen name="Bottom" component={BottomTab}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


// // //bottomtab
// const Bottom=createBottomTabNavigator()
// function BottomTab(){
//   return(
//     <Bottom.Navigator screenOptions={{headerShown:false}}>
//       <Bottom.Screen name="Home" component={HomeScreen} />
//         <Bottom.Screen name="Chefbox" component={ChefboxScreen}options={{tabBarIcon:({size,color})=>{
//           return(
//             <Image source={require('../../HP/projectname/src/assets/icons/reception.png')}style={{width:30,height:30}}/>
//           )
//         }}}/>
//         <Bottom.Screen name="chef" component={ChefScreen}/>
//         <Bottom.Screen name="pizza" component={PizzaScreen}/>   
//          </Bottom.Navigator>
//   )
// }

// //camera
// export default function App(){
//   return(
//     <>
//     {/* <TakePicture/> */}
//     {/* <OtpScreen/> */}
//     <Checkbox/>
//     {/* <DateTime/> */}
//     </>
//   )
// }

//cars

const Stack=createNativeStackNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Bottom" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const Bottom=createBottomTabNavigator()      
function BottomTab(){
  return(
    <Bottom.Navigator screenOptions={{headerShown:false}}>
     <Bottom.Screen name="Menu" component={CarScreen}options={{tabBarIcon:({size,color})=>{
          return(
            <Image source={require('../../HP/projectname/src/assets/icons/blackhome.png')}style={{width:30,height:30}}/>
          )
        }}}  /> 
      <Bottom.Screen name="Categories" component={CarScreen2}options={{tabBarIcon:({size,color})=>{
          return(
            <Image source={require('../../HP/projectname/src/assets/icons/categories.png')}style={{width:30,height:30}}/>
          )
        }}} />
        <Bottom.Screen name="Listing" component={CarScreen3}options={{tabBarIcon:({size,color})=>{
          return(
            <Image source={require('../../HP/projectname/src/assets/icons/search.png')}style={{width:30,height:30}}/>
          )
        }}}/>
         
         </Bottom.Navigator>
  )
}

// // assignment
// import React from "react";
// import Assign from "./src/screens/assignScreen/assignScreen";
// import AssignS from "./src/screens/assignScreen2/assignScreen2";
// import Assignment from "./src/screens/assignScreen3/assignScreen3";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";

// const Stack=createNativeStackNavigator()
// export default function App(){
//   return(
    
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}}>
//         <Stack.Screen name="login" component={Assign}/>
//         <Stack.Screen name="assign" component={AssignS}/>
//         <Stack.Screen name="cloths" component={Assignment}/>
//         </Stack.Navigator>
//     </NavigationContainer>
      
//   )
// }
