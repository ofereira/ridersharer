import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomePage from './app/screens/Home';
import MapPage from './app/screens/Map';


const RootStack = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: HomePage
      },
      Map: {
        screen: MapPage
      }
    },
    {
      initialRouteName: 'Home',
      
    }
  )
);

export default RootStack;