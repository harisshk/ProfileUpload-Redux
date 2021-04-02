import React from 'react'
import {Text,View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Provider} from 'react-redux';
import {store} from './user/store'
import Profile from './user/profile'
import ProfileViewer from './user/profileViewer'
export default function App(props){
  const Stack = createStackNavigator();
  const Tab = createMaterialTopTabNavigator();
    return(
   <Provider store={store}>

<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}} name= 'Form' component={Profile}></Tab.Screen>
        <Tab.Screen options={{headerShown: false}} name= 'View' component={ProfileViewer}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  
   </Provider>
    
  )
}