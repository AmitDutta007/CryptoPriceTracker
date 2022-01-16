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

//    let normalizeMarketCap=(marketCap)=>{
//          if(marketCap > 1_000_000_000_000){
//              return `${Math.floor(marketCap/1_000_000_000_000)} T`
//          }else if(marketCap > 1_000_000_000){
//             return `${Math.floor(marketCap/1_000_000_000)} B`
//         }else if(marketCap > 1_000_000){
//             return `${Math.floor(marketCap/1_000_000)} M`
//         }else if(marketCap > 1_000){
//             return `${Math.floor(marketCap/1_000)} K`
//         }
//         return marketCap
//     }; 

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
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign name="caretdown" size={12} color="green" style={{ alignSelf: 'center', marginRight: 5 }} />
                    <Text style={styles.text}>{price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
            </View>

            <View style={styles.rightview}>
                <Text style={styles.title}>{current_price}</Text>
                {/* <Text style={styles.text}>MCap {normalizeMarketCap(market_cap)}</Text> */}
                <Text style={styles.text}>MCap {market_cap}</Text>
            </View>
        </TouchableOpacity>

    )
}
export default CoinItem;