import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from './../components/Title';

export default function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View>
        <Image source={require("../assets/success.jpg")}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1,
    alignItems:"center",
    justifyContent:"center"


  }
})