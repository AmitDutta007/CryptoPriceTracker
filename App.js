import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, } from 'react-native';
import CoinItem from './src/component/CoinItem';
import cryptocurrencies from "./assets/data/cryptocurrencies.json"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headtext}>CRYPTOPRICETRACKER</Text>
        <FlatList
          data={cryptocurrencies}
          renderItem={({ item }) => <CoinItem item={item} />
          }
        />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 55,
  },
  headtext: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
