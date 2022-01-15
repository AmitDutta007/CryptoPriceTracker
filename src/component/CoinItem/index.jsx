import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const CoinItem = ({ item }) => {
    const {
        name,
        current_price,
        price_change_percentage_24h,
        market_cap_rank,
        symbol,
        market_cap,
        image
    } = item
    return (

        <TouchableOpacity style={styles.coincontainer}>
            <Image
                source={{ uri: image }}
                style={{ height: 30, width: 30, marginRight: 10, alignSelf: 'center' }}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.textView}>
                    <View style={styles.rankContainer}>
                        <Text style={styles.rank}>{market_cap_rank}</Text>
                    </View>
                    <Text style={styles.text}>{symbol}</Text>
                    <AntDesign name="caretdown" size={12} color="green" style={{ alignSelf: 'center', marginRight: 5 }} />
                    <Text style={styles.text}>{price_change_percentage_24h}</Text>
                </View>
            </View>

            <View style={styles.rightview}>
                <Text style={styles.title}>{current_price}</Text>
                <Text style={styles.text}>{market_cap}</Text>
            </View>
        </TouchableOpacity>

    )
}
export default CoinItem;