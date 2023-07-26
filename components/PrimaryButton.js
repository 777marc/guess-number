import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {

  function pressed() {
    console.log("pressed!!!");
  }

  return (
    <Pressable onPress={pressed}>
      <View style={styles.buttonContainer}>
        <Text style={styles.textContainer}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  textContainer: {
    color: "white",
    textAlign: "center",
  }
});

export default PrimaryButton;
