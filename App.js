import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [rounds, setRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fonstLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fonstLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function setRoundNumber(lastRound) {
    setRounds(lastRound);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function resetGame() {
    setGameIsOver(false);
    setUserNumber(null);
    setRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber && !gameIsOver) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} setRoundNumber={setRoundNumber} />;
  }

  if (gameIsOver) {
    screen = <GameOverScreen reset={resetGame} userNumber={userNumber} rounds={rounds}></GameOverScreen>;
  }

  return (

    <LinearGradient colors={[Colors.primary500, Colors.yellow500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
