import { Text, View, StyleSheet, FlatList, Alert } from "react-native";
import CustomButton from "../components/Button";
import { useEffect, useState } from "react";

let maxCount = 100;
let minCount = 1;

function randomIntFromInterval(min, max, exclude) {
  let ranNum = Math.floor(Math.random() * (max - min)) + min;
  if (ranNum === exclude) {
    return randomIntFromInterval(min, max, exclude);
  } else {
    return ranNum;
  }
}

function GameGuessOutputScreen({ number, onGameOver }) {
  number = parseInt(number);
  const initialGuess = randomIntFromInterval(1, 100, number);
  const [opponentGuess, setOpponentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  function handleUserAction(action) {
    if ((action === "lower" && opponentGuess < number) || (action === "higher" && opponentGuess > number)) {
      Alert.alert("Invalid Direction", "Kindly choose a valid direction", [{ text: "sorry", style: "cancel" }]);
      return;
    }
    console.log("sdfghjj");
    if (action === "lower") {
      maxCount = opponentGuess;
    } else {
      minCount = opponentGuess + 1;
    }
    let newNumber = randomIntFromInterval(minCount, maxCount, opponentGuess);
    setOpponentGuess(newNumber);
    setRounds((prev) => [...prev, newNumber]);
  }

  useEffect(() => {
    if (opponentGuess == number) {
      onGameOver({ status: true, rounds: rounds.length });
    }
  }, [opponentGuess, number, onGameOver]);

  return (
    <View style={styles.main}>
      <Text style={styles.staticHeading}>OPPONENT GUESS</Text>

      <View style={styles.oponentGuess}>
        <View style={styles.opponentGuessShadow}></View>
        <Text style={styles.oponentGuessText}>{opponentGuess}</Text>
      </View>
      <View style={styles.GuessHint}>
        <Text style={styles.staticHint}>Higher or Lower</Text>
        <View style={styles.guessButtons}>
          <CustomButton onClickHandler={() => handleUserAction("lower")}>-</CustomButton>
          <CustomButton onClickHandler={() => handleUserAction("higher")}>+</CustomButton>
        </View>
      </View>
      <FlatList
        style={{ height: 325 }}
        data={rounds}
        renderItem={(dataObj) => {
          return (
            <View style={styles.logParent}>
              <View style={styles.shadow}></View>
              <View style={styles.logListItem}>
                <Text style={{ fontFamily: "poppins-bold" }}>#{dataObj.index + 1}</Text>
                <Text style={{ fontFamily: "poppins-regular" }}>Opponent Guess: {dataObj.item}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    paddingVertical: 30,
    gap: 30,
  },

  guessButtons: {
    flexDirection: "row",
    gap: 20,
  },
  staticHint: {
    fontSize: 20,
    fontFamily: "poppins-bold",
  },
  GuessHint: {
    backgroundColor: "#fff",
    width: "85%",
    // height: 300,
    alignItems: "center",
    padding: 30,
    gap: 50,
    borderRadius: 10,
    borderWidth: 2,
  },
  oponentGuessText: {
    height: 100,
    width: 100,
    backgroundColor: "#E0BA46",
    borderWidth: 1.5,
    // borderRadius: 10,
    fontSize: 50,
    textAlign: "center",
    textAlignVertical: "center",
  },
  oponentGuess: {
    position: "relative",
  },
  opponentGuessShadow: {
    position: "absolute",
    height: 100,
    width: 100,
    backgroundColor: "#011928",
    bottom: -3,
    right: -3,
  },
  staticHeading: {
    width: "90%",
    fontFamily: "poppins-bold",
    // backgroundColor: "red",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
  },
  logParent: {
    position: "relative",
    // backgroundColor: "blue",
  },
  logListItem: {
    backgroundColor: "#E0BA46",
    borderWidth: 1,
    width: 300,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  shadow: {
    width: 300,
    height: 45,
    backgroundColor: "#011928",
    position: "absolute",
    bottom: 6,
    right: 16,
  },
});
export default GameGuessOutputScreen;
