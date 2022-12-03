import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const route = useRoute();
  return (
    <View  style={style.mainStyle}>
      <Text style={style.text}>HomeScreen</Text>
      <View style={style.main}>
        <Text style={style.textValue}>First Name = {route.params.firstName}</Text>
        <Text style={style.textValue}>Last Name = {route.params.lasttName}</Text>
        <Text style={style.textValue}>Email = {route.params.email}</Text>
        <Text style={style.textValue}>Contact = {route.params.contact}</Text>
        <Text style={style.textValue}>UserName = {route.params.username}</Text>
        <Text style={style.textValue}>Password = {route.params.password}</Text>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  mainStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#001937',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30
  },
  textValue:{
    color: 'white',
    fontSize: 15,
    margin:5
  }
})

export default HomeScreen