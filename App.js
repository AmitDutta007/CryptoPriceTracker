import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CoinItem from './src/component/CoinItem';


export default function App() {
  return (
    <View style={styles.container}>
      <CoinItem />
      {/* <Text>hjgfjf</Text> */}
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
});
