import { Alert, FlatList, StyleSheet, Text, View, fll } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import PcNumber from "../components/PcNumber";
import CustomButton from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import ComputerGuess from "../components/ComputerGuess";

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCounts, setGuessCounts] = useState([initialGuess]);
  console.log(currentGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCounts.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return randomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Ooops!", "You know it's wrong...", [
        { text: "OK", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessCounts((prevGuess) => [newRandomNumber, ...prevGuess]);
  };

  return (
    <View style={styles.container}>
      <Title>Computer Guess</Title>
      <PcNumber>{currentGuess}</PcNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Increase or Decrease </Text>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minuscircleo" size={30} color="white" />
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="pluscircleo" size={30} color="white" />
          </CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={guessCounts} keyExtractor={(itemData) => itemData} renderItem={(itemData) => (
          <ComputerGuess roundNumber={guessCounts.length - itemData.index} guess={itemData.item}/>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 15,
  },
  listContainer:{
    marginTop:10,
    flex:1
  }
});
