import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ExchangeItemsScreens from '../screens/HomeScreen';
import UserDetailsScreen from '../screens/UserDetails';
import MyBarters from '../screens/MyBarters'
export const AppStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: ExchangeItemsScreens,
    navigationOptions: {
      headerShown: false
    }
  },
  UserDetailsScreen: {
    screen: UserDetailsScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  MyBarters:{
    screen:MyBarters,
    navigationOptions:{
      headerShown: false
    }
  }
},
  {
    initialRouteName: 'HomeScreen'
  }
);