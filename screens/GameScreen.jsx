import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import PcNumber from "../components/PcNumber";
import CustomButton from "../components/CustomButton";

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log(currentGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
  };

  return (
    <View style={styles.container}>
      <Title>Computer Guess</Title>
      <PcNumber>{currentGuess}</PcNumber>
      <View>
        <Text>Increase or Decrease </Text>
        <View>
          <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
