import React from 'react'
import { View, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const CoinItem = () => {
    return (
        <View style={styles.coincontainer}>
            <Image
                source={{ uri: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579' }}
                style={{ height: 30, width: 30, marginRight: 10, alignSelf: 'center' }}
            />
            <View>
                <Text style={styles.title}>BitCoin</Text>
                <View style={styles.textView}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>1</Text>
                    </View>
                    <Text style={styles.text}>BTC</Text>
                    <AntDesign name="caretdown" size={12} color="green" style={{ alignSelf: 'center', marginRight: 5 }} />
                    <Text style={styles.text}>0,63%</Text>
                </View>
            </View>

            <View style={styles.rightview}>
                <Text style={styles.title}>56265.05</Text>
                <Text style={styles.text}>MCap 1.076T</Text>
            </View>
        </View>
    )
}
export default CoinItem;