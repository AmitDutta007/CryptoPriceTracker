import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
    marginRight: "2%"
  },
  textView: {
    flexDirection: 'row',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3
  },
  coincontainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    padding: '4%'
  },
  rightview: {
    marginLeft: 'auto'
  },
  rank: {
    fontWeight: 'bold',
    color: 'white'
  },
  rankContainer: {
    backgroundColor: 'grey',
    paddingHorizontal: '3%',
    marginRight: '1.5%',
    borderRadius: 5
  }
});
export default styles  