import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width +20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.3)

const CarouselCards = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: ITEM_WIDTH  ,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:'red'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius:120/2
  },
  header: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    textAlign:'center'
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCards
