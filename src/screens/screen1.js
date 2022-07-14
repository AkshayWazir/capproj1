import React from 'react';
import {StyleSheet, View , Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../fragments/home';
import Info from '../fragments/info';
import Media from '../fragments/media';
import Dashboard from '../fragments/dashboard';
 import Speedo1 from '../fragments/speedtestcool2';
 import Map from '../fragments/map';

const Screen1=()=>{

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={Dashboard} />    
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Media" component={Media} />
      </Tab.Navigator>
      </NavigationContainer>
    )
}

export default Screen1;