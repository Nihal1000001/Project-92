import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaView} />
        <Text style={styles.titleText}>BMIfy</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('BMICalculator')}>
            <Text style={styles.buttonText}>Know your BMI</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Tips')}>
            <Text style={styles.buttonText}>Understand your BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  titleText: {
    justifyContent: 'center',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 25,
    backgroundColor: 'red',
    marginTop: -250,
  },
  button: {
    fontsize: 30,
    flex: 0.3,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 80,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: RFValue(4),
    borderRadius: RFValue(50),
    paddingLeft: RFValue(0),
  },
});
