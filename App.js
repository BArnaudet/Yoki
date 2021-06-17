import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, Pressable, ScrollView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import Notes from './pages/Notes';
import DemoState from './pages/DemoState';
import LoremPicsum from './pages/LoremPicsum';
import Product from './pages/Product';
import Login from './pages/Login';
import AppCamera from './pages/AppCamera';
import Header from './components/Header';

export default function App() {

  const [page, navigate] = useState('Notes');
  const [hasPermission, setHasPermission] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  function onScanPress(){
    /* TOOD: Ouvrir une page pour l'appareil photo */
    navigate('Camera');
  }

  async function onBarCodeScan({data, type}){
    await getProductInfoFromApi(data);
  }


  async function getProductInfoFromApi (barCode) {
    try {
      //this.setState({loading : true});

      let response = await fetch(
        'https://fr.openfoodfacts.org/api/v0/produit/' + barCode + '.json'
      );
      let responseJson = await response.json();

      // Travailler avec les données 
      let _products = products;
      _products.push(responseJson);
      setProducts(_products);
      setCurrentProduct(responseJson)
      navigate('Product');

    } catch (error) {
      console.error(error);
    }
  }

  function showProduct(pressedItem){
    setCurrentProduct(pressedItem);
    navigate('Product');
  }

  /* Fonction Appel API */

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* Header */}
        <Header title={page}/>

        {/* TODO: Ajouter navigation */}
        {page === 'Notes' && <Notes email={email} appScan={onScanPress} appItems={products} onPressItem={showProduct}/>}

    </SafeAreaView>
  );
}
/* Ajout d'une  constante pour le style global */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
