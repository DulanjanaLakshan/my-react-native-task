import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import SingUpScreen from '../screens/SingUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack= createNativeStackNavigator();
const Router = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Group>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='SingUp' component={SingUpScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Group>
   </Stack.Navigator>
  )
}

export default Router