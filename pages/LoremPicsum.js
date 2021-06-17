import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TextInput, Image} from 'react-native'

export default function LoremPicsum(){
    const [text, onChangeText] = useState('');
    const [url, setUrl] = useState('');

    function iClick(){
        let _url = 'https://loremflickr.com/300/600/' + text;
        setUrl(_url)
    }

    function displayOrNotImage(){
        if(url === ''){
            return <Text>Merci de reseigner un mot clé</Text>
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Votre mot clé</Text>

            <TextInput
                onSubmitEditing={iClick}
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />

            <TouchableOpacity onPress={iClick}>
                <Text style={styles.text}>Générer une image</Text>
            </TouchableOpacity>

            {/* Rendu conditionnel */}
            {/* Possibilité #1: avec une fonction */}
            {/* {displayOrNotImage()} */}

            {
                url === '' ? (
                    <Text>Merci de reseigner un mot clé</Text>
                ) : (
                    <Image
                        style={styles.image}
                        source={{
                            uri: url
                    }}/>
                )
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 600,
        height: 600,
    },
    container: {
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
    text: {
        fontSize: 30
    }
})