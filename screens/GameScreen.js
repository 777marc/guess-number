import { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Instructions from "../components/ui/Instructions";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";

let maxBoundary = 10;
let minBoundary = 1;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.abs(Math.floor(Math.random() * (min - max)) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber, onGameOver, setRoundNumber }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      setRoundNumber(guessRound.length);
      onGameOver();
    }
  }, [currentGuess]);

  useEffect(() => {
    maxBoundary = 10;
    minBoundary = 1;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Lies!", "Wrong!  Try again...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRound((prev) => [currentGuess, ...prev]);
  }

  const guessRoundsListLength = guessRound.length;

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <Instructions>Higher or Lower?</Instructions>
          <View style={styles.guessHandlerButtons}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRound}
            renderItem={(items, index) => {
              return (
                <GuessLogItem
                  roundNumber={guessRoundsListLength - items.index}
                  guess={items.item}
                />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  guessHandlerButtons: {
    flexDirection: "row",
  },
  listContainer: {
    padding: 16,
  },
});

export default GameScreen;
