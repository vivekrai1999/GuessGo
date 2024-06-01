import { View, Text } from "react-native";
import CustomButton from "../components/Button";
import { StyleSheet } from "react-native";

function GameOverScreen({ onGameOver, resetUserNumber, number, roundsTaken }) {
  function handleStartAgain() {
    onGameOver({ status: false, rounds: 0 });
    resetUserNumber(null);
  }
  return (
    <View style={styles.main}>
      <Text style={styles.gameOverText}>Game{"\n"} Over</Text>
      <Text style={styles.gameOverDetails}>
        Phone needed <Text style={{ color: "#E0BA46", fontFamily: "poppins-bold" }}>{roundsTaken}</Text> rounds to guess the number <Text style={{ color: "#E0BA46", fontFamily: "poppins-bold" }}>{number}</Text>
      </Text>
      <CustomButton onClickHandler={handleStartAgain}>Start Again</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    gap: 30,
  },
  gameOverText: {
    fontSize: 90,
    // backgroundColor: "red",
    fontFamily: "poppins-bold",
    lineHeight: 100,
    lineHeight: 100,
  },
  gameOverDetails: {
    fontSize: 20,
    fontFamily: "poppins-regular",
    textAlign: "center",
  },
});

export default GameOverScreen;
