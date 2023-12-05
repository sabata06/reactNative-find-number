import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "./../components/Title";
import CustomButton from './../components/CustomButton';

export default function GameOverScreen({ userNumber }) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={styles.imgView}>
        <Image style={styles.img} source={require("../assets/success.jpg")} />
      </View>
      <Text style={styles.result}>
        You found the number {userNumber} with{" "}
        <Text style={styles.number}>10</Text> attempts
      </Text>
      <CustomButton>
        New Game
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgView: {
    width: 350,
    height: 350,
    overflow: "hidden",
    borderRadius: 175,
    borderWidth: 3,
    borderColor: "red",
    margin: 30,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    marginBottom:20,
  },
  number: {
    color: "red",
  },
});
