import React from "react";
import { View, Text } from "react-native";

export default function Product(props){

    if(props.pressedItem=== null){
        return null;
    }

    return (
        <View style={{flex: 1}}>
            <Text>{props.product.product.code}</Text>

            <Text>Personnalisez ici l'affichage des données !</Text>
        </View>
    )
}