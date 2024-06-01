import { useState } from "react";
import CustomButton from "../../components/Button";
import GameUserInputScreen from "../../screens/GameUserInputScreen";
import GameGuessOutputScreen from "../../screens/GameGuessOutputScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameOverScreen from "../../screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { View } from "react-native";
import colors from "../../constants/colors";

const { StyleSheet, ImageBackground, SafeAreaView } = require("react-native");

function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState({ status: false, rounds: 0 });

  const [fontsLoaded] = useFonts({
    "poppins-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "sevillana-regular": require("../../assets/fonts/Sevillana-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.root}>
        {userNumber && !isGameOver.status ? (
          <GameGuessOutputScreen number={userNumber} onGameOver={setIsGameOver} />
        ) : isGameOver.status ? (
          <GameOverScreen onGameOver={setIsGameOver} resetUserNumber={setUserNumber} number={userNumber} roundsTaken={isGameOver.rounds} />
        ) : (
          <GameUserInputScreen handleUserNumber={setUserNumber} />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.secondaryColor,
  },
});
export default App;
