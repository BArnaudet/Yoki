import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, TextInput} from 'react-native'

export default function ScanButtonView(props){
    return (
      <View>
        <Text style={styles.label}>Titre</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Notes</Text>
        <TextInput style={styles.inputNotes} />
        <TouchableOpacity>
          <Text style={styles.button}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({

  label : {
    textAlign: 'center',
    marginBottom: 10
  },

  input : {
    borderWidth: 1,
    height: 30,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15
  },

  inputNotes : {
    borderWidth: 1,
    height: 30,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    height: 300
  },

    button : {
      paddingTop: 3,
      textAlign: 'center',
      backgroundColor: 'orange',
      marginLeft: 15,
      marginRight: 15,
      height: 25
    }
})