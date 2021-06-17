import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native'
import ProductItem from './ProductItem';

export default function ProductHistory(props){
    return (
      <ScrollView>
      {
        props.propsItem.map(el => {
          return (
            <ProductItem data={el} onPressItem={props.onPressItem}/>  
          )
        })
      }
      </ScrollView>
    )
}