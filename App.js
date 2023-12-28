import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0)

  const sendedNumberHandler = (sendedNumber) => {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfGuess) => {
    setGameIsOver(true);
    setGuessCounts(numberOfGuess)
  };
  const startNewGameHandler = () =>{
    setUserNumber(null)
    setGuessCounts(0)

  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessCounts} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>;
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/back.jpg")}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.5,
  },
});
