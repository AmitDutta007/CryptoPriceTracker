import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579' }}
        style={{ height: "100%", width: "10%", marginRight: '1%', alignSelf: 'center' }}
      />
      <View>
        <Text style={styles.title}>BitCoin</Text>
        <View style={styles.textView}>
          <Text style={styles.text}>1</Text>
          <Text style={styles.text}>BTC</Text>
          <Text style={styles.text}>0,63%</Text>
        </View>
      </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 55,
    // flexDirection: 'row'
  },
  text: {
    fontSize: 15,
    marginRight:"2%"
  },
  textView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
