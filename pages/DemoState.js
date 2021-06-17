import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default function DemoState(){

    const [valeur, setValeur] = useState(0);

    function modifierLaVariable(){
        let _valeur = valeur;
        _valeur = _valeur + 10;

        setValeur(_valeur);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{valeur}</Text>

            <TouchableOpacity onPress={modifierLaVariable}>
                <Text style={styles.text}>Clique ici !</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 30
    }
})