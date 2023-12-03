import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

export default function GameStartScreen() {

  const resetHandler = () =>{
    
  }
  const confirmHandler = () =>{
    
  }

  return (
    <View style={styles.container}>
      <Text>Guess Number App </Text>
      <View style={styles.Card}>
        <TextInput maxLength={2} keyboardType="number-pad" style={styles.input} />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <CustomButton onPress={resetHandler}>Clear</CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={confirmHandler}>Confirm</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  Card: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection:"row",
},
  button: {
    flex:1,
    
},
});
