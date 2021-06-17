import React from 'react';
import {View, Text} from 'react-native'
import Header from '../components/Header';
import ScanButtonView from '../components/ScanButtonView';
import ProductsHistory from '../components/ProductsHistory';

export default function Home(props){
    return (
       <View style={{flex: 1}}>
            <Text>{props.email}</Text>
            <ScanButtonView handleScanPress={props.appScan} />
            <ProductsHistory propsItem={props.appItems} onPressItem={props.onPressItem}/>
        </View>
    )
}