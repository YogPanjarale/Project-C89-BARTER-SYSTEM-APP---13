import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {TabNavigator} from './components/TabNavigator'
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <AppContainer/>
    );
  }
}

export default App;
var SwitchNavigator = createSwitchNavigator({
  // AnimationScreen:{screen:AnimationScreen},
  WelcomeScreen:{screen:WelcomeScreen},
  Home:{screen:TabNavigator},
 
  

  
})
var AppContainer = createAppContainer(SwitchNavigator)
