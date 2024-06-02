import { useState } from "react";
import CustomButton from "../components/Button";

const { View, Text, StyleSheet, TextInput, Alert } = require("react-native");
import colors from "../constants/colors";
import GameLogo from "../components/gameLogo";

function GameUserInputScreen({ handleUserNumber }) {
  const [userNumber, setUserNumber] = useState("");

  function handleUserInput(userInput) {
    setUserNumber(userInput);
  }

  function handleReset() {
    setUserNumber("");
  }

  function handleConfirm() {
    const choosenNumber = parseInt(userNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Please add number between 1 and 99", [{ text: "ok", style: "destructive", onPress: handleReset }]);
      return;
    }
    handleUserNumber(userNumber);
  }

  return (
    <View style={styles.main}>
      <View style={styles.staticHeading}>
        <Text style={styles.staticHeadingText}>Let's Play</Text>
      </View>
      <View style={styles.GuessInput}>
        <View style={styles.GuessInputMain}>
          <Text style={styles.GuessInputMainText}>Enter Number</Text>
          <View style={styles.GuessInputText}>
            <TextInput
              keyboardType="numeric"
              maxLength={2}
              style={{ fontSize: 50, textAlign: "center" }}
              onChangeText={handleUserInput}
              value={userNumber}
              // cursorColor={"transparent"}
            />
          </View>
        </View>
        <View style={styles.GuessInputActions}>
          <CustomButton onClickHandler={handleReset} type="reset">
            Reset
          </CustomButton>
          <CustomButton onClickHandler={handleConfirm} type="confirm">
            Confirm
          </CustomButton>
        </View>
      </View>
      <GameLogo />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    paddingTop: 50,
    gap: 30,
  },
  staticHeading: {
    // backgroundColor: "red",
    width: "75%",
  },

  staticHeadingText: {
    fontFamily: "poppins-bold",
    width: "90%",
    // backgroundColor: "red",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  GuessInput: {
    // backgroundColor: colors.ternaryColor,
    backgroundColor: "#fff",
    width: "75%",
    // height: 300,
    alignItems: "center",
    padding: 30,
    gap: 50,
    borderRadius: 10,
    borderWidth: 2,
  },

  GuessInputMain: {
    gap: 30,
    alignItems: "center",
  },

  GuessInputMainText: {
    fontSize: 20,
    fontFamily: "poppins-regular",
    // fontWeight: "500",
  },

  GuessInputText: {
    // backgroundColor: "yellow",
    height: 60,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    fontFamily: "poppins-bold",
  },

  GuessInputActions: {
    flexDirection: "row",
    gap: 20,
  },
});

export default GameUserInputScreen;
