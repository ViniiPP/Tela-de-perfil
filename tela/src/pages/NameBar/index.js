import React from 'react';
import { Text, View, StyleSheet,TouchableHighlight,Button,TextInput } from "react-native"
import { useState,useEffect } from 'react';

export const Namebar = ({navigation}) => {
    const MaxLenght = 50;
    const [numberDigito,setNumberDigito] = useState ('');


    return (
        <View style = {styles.bodyContainer}>
           <View style = {styles.bodyContainer}>
           <View style = {styles.TextContainer}>
                <Text style  = {styles.textTitle}>Vamos dar um nome ao seu bar</Text>
                <Text style = {styles.Subtitle}>Nomes curtos funcionam melhor. Não se preocupe, você poderá fazer alterações depois.</Text>
                <TextInput style = {styles.textinput} maxLength={50} onChangeText={(newText) => {setNumberDigito(newText)}}></TextInput>
                <Text>{MaxLenght - numberDigito.length} caracteres disponíveis</Text>
            </View>
           </View>
           <View style = {styles.nav}>
                <TouchableHighlight style = {styles.touch}>
                <View >
                        <Text style = {{color: 'black', fontSize: 20,fontWeight: 'bold',textDecorationLine: 'underline'  }} onPress={() => navigation.navigate ('anunciar')}>Voltar</Text>
                 </View>
                </TouchableHighlight>
                <TouchableHighlight style = {{left: 15}}>
                <View style={styles.button }>
                        <Text style = {{color: 'white', fontSize: 20,fontWeight: 'bold'} }onPress={() => navigation.navigate ('description')}>Avançar</Text>
                 </View>
                </TouchableHighlight>
           </View>


        </View>
    )

 
}
const styles = StyleSheet.create (
    {
        bodyContainer :{
            flex: 1,
            backgroundColor: '#FBF7ED',
            alignItems: 'center',
        
        },
        TextContainer :{
            marginTop: 90,
            gap : 10,
            width: 350,
            height: 350
        },
        textinput : {
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 3, 
            borderColor: 'black',
            height: 110
        },
        textTitle : {
            fontSize: 23,
            fontStyle: 'normal',
            fontWeight: 'bold',
        },
        Subtitle : {
            color: '#49454F'
        },
        nav : {
            elevation: 30,
            flexDirection: 'row', 
            width: '100%',
            height: 75,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 25, // Aplica raio no canto superior esquerdo
            borderTopRightRadius: 25,
            gap: 150
        }
        ,
        button : {
            backgroundColor: 'black',
            width: 120,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8
        },
        touch : {
            alignItems: 'center',
        }

    }
)

export default Namebar;