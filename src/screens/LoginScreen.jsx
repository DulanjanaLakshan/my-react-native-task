import { View, Text, ScrollView, StyleSheet, ImageBackground, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import userIcon from '../assets/icons/user.png'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation=useNavigation();

    const [name,setname]=useState('');
    const [key,setkey]=useState('');

    var username="admin";
    var password="admin";

    login=()=>{
        if(username==name && password==key){
            navigation.navigate("Home")
        }else{
            alert("Plese Check The Username and Password ..!");
        }
    }
    return (
        <SafeAreaView>
            <ScrollView style={style.background}>
                <View style={style.mainview}>
                    <View >
                        <ImageBackground source={userIcon} style={style.userLogo} />
                    </View>
                    <View>
                        <TextInput style={style.textInput} placeholder="Plese Enter Your UserName" placeholderTextColor="#FFF8DC" onChangeText={text=>setname(text)}/>
                        <TextInput style={style.textInput} placeholder="Plese Enter Your Password" secureTextEntry placeholderTextColor="#FFF8DC" onChangeText={text=>setkey(text)}/>
                    </View>
                    <View style={style.buttonview}>
                        <TouchableOpacity style={style.button} onPress={()=>navigation.navigate("SingUp")}>
                            <Text>Sing Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button} onPress={login}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#001937'
    },
    mainview: {
        width: 423,
        height: 858,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userLogo: {
        width: 50,
        height: 50,
        marginBottom: 20
    },
    textInput: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
        marginTop: 30,
        color: 'white',
        paddingLeft: 25
    },
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        width: 150,
        height: 40,
        marginTop: 50,
        borderRadius: 50,
    },
    buttonview: {
        width: 423,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})

export default LoginScreen