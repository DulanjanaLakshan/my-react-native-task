import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View  style={style.mainStyle}>
      <Text style={style.text}>HomeScreen</Text>
      <View style={style.main}>
        <Text style={style.textValue}>Id = 001</Text>
        <Text style={style.textValue}>First Name = Dulanjana</Text>
        <Text style={style.textValue}>Last Name = Lakshan</Text>
        <Text style={style.textValue}>Email = dulanjana20013@gmail.com</Text>
        <Text style={style.textValue}>Contact = 071-2280020</Text>
        <Text style={style.textValue}>UserName = Dulanjana</Text>
        <Text style={style.textValue}>Password = Dulanjana$2001</Text>
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