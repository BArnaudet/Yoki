import React, { useState } from 'react';
import {View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'

export default function Login(props){

    const [password, setPassword] = useState('');

    function checkPassword(str)
    {
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      return re.test(str);
    }

    function checkEmail(str)
    {
      var re = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      return re.test(str);
    }

    function checkAndLoginIn(){
        if(!checkPassword(password)){
            alert('Veuillez entrer un mot de passe correct')
        } else if(!checkEmail(props.email)){
            alert('Veuillez entrer une adresse email valide')
        } else {
            if(props.email === 'contact@entreprise.com' && password === '$Motdepasse2'){
                props.login();
            } else {
                alert('Utilisateur introuvable')
            }
        }
    }

    return(
        <View style={{flex: 1}}>

            <TextInput
                value={props.email}
                onChangeText={(str) => props.setEmail(str)}

                placeholder="Votre adresse email"
                autoCompleteType="email"
                keyboardType="email-address"
                type="email"
                autoCapitalize={'none'}
            />

            <TextInput
                value={password}
                onChangeText={(str) => setPassword(str)}

                keyboardType="default"
                placeholder="Votre mot de passe"
                autoCompleteType="password"
                secureTextEntry={true}
            />

            <Button
                title="Se connecter"
                disabled={(props.email === '' || password === '')}
                onPress={checkAndLoginIn}
            />

        </View>
    )
}