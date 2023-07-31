import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      {/* // the guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* // + - buttons */}
      </View>
      <View>
        <Text>Round:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default GameScreen;
