import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

export default function Header({title}){
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
      },
      headerText: {
        color: 'white',
        fontSize: 20,
          fontWeight: 'bold'
      }
})