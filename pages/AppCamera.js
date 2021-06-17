import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function AppCamera(props){
    const [scanned, setScanned] = useState(false);

    return (
        <View style={{flex: 1}}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : props.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        </View>
    )
}