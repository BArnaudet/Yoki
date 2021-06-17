import React from 'react';
import {Text, StyleSheet} from 'react-native'

export default function BigText(props){

    console.log(props.fontSize);

    return (
        <Text style={[styles.bigText, {
            fontSize: props.fontSize
        }]}>
            {props.text || "Please fill text props" }
        </Text>
    )
}

const styles = StyleSheet.create({
    bigText: {
        fontWeight: 'bold',
        fontSize: 22
    }
})