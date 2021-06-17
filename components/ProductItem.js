import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'

export default function ProductItem(props){

    return (
        <TouchableOpacity key={props.data.id} style={styles.articleContainer} onPress={() => props.onPressItem(props.data)}>
            <Text style={sText.articleTitle}>{props.data.product.brands}</Text>
            <Text style={sText.articleDesc}>{props.data.code}</Text>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    articleContainer : {
      marginHorizontal: 10,
      borderBottomWidth: 1,
      paddingVertical: 15
    }
  })
  /* Ajout d'une nouvelle constante pour le texte */
  const sText = StyleSheet.create({
      articleTitle: {
        fontSize: 24,
        marginBottom: 5
      },
      articleDesc: {
        fontSize: 16
      }
    }) 
    