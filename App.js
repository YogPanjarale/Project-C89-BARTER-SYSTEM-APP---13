import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import styles from './Styles'
import MyTextInput from './components/MyTextInput'
export default function App() {
  return (
    
     <WelcomeScreen/>
  //  <View>
  //    <MyTextInput placeholder="Email"/>
  //    <MyTextInput placeholder="Password"
  //    secureTextEntry 
  //    />
  //  </View>
  );
}
