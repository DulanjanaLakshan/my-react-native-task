import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import userIcon from '../assets/icons/user.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const SingUpScreen = () => {

  const baseUrl = 'http://localhost:8080';

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lasttName, setLasttName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const goToMessageScreen = () => {
    navigation.navigate('Home', { firstName,lasttName,email,contact,username,password});
  };


  return (
    <SafeAreaView style={style.mainStyle}>
      <View style={style.userIconStyle} >
        <ImageBackground source={userIcon} style={style.userLogo} />
      </View>
      <View>
        <View style={style.names}>
          <TextInput placeholder='First Name' placeholderTextColor='#FFF8DC' style={style.textFirstNameInput} onChangeText={text => setFirstName(text)} />
          <TextInput placeholder='Last Name' placeholderTextColor='#FFF8DC' style={style.textFirstNameInput} onChangeText={text => setLasttName(text)} />
        </View>
        <View style={style.names}>
          <TextInput placeholder='Email' onChangeText={text => setEmail(text)} placeholderTextColor='#FFF8DC' style={style.textEmailInput} textEmailInput />
        </View>
        <View style={style.names}>
          <TextInput placeholder='Contact' onChangeText={text => setContact(text)} placeholderTextColor='#FFF8DC' style={style.textEmailInput} />
        </View>
        <View style={style.names}>
          <TextInput placeholder='UserName' onChangeText={text => setUsername(text)} placeholderTextColor='#FFF8DC' style={style.textFirstNameInput} />
          <TextInput placeholder="Password" onChangeText={text => setPassword(text)} secureTextEntry placeholderTextColor="#FFF8DC" style={style.textFirstNameInput} />
        </View>
      </View>
      <View style={style.names}>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={goToMessageScreen}>
          <Text>Sing Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  mainStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#001937',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  userLogo: {
    width: 50,
    height: 50
  },
  names: {
    width: '90%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 25
  },
  textFirstNameInput: {
    width: '40%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 50
  },
  textEmailInput: {
    width: '88%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 50
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    width: 150,
    height: 40,
    borderRadius: 50,
  }
})
export default SingUpScreen