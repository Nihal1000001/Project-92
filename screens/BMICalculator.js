import React,{Component} from "react";
import{
  Text,
  View,
  StyleSheet
} from "react-native";

export default class BMICalculator extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.text}> BMI Calculator</Text>
      </View>


    )
  }
}

const styles= StyleSheet.create({
container:{
justifyContent: "centre",
backgroundColor:"cyan"
},
text: {
    justifyContent: 'centre',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },

})