import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {

  function pressed() {
    console.log("pressed!!!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} onPress={pressed}>
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  textContainer: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});

export default PrimaryButton;
