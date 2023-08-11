import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Instructions({ children, style }) {
  return <Text style={[styles.instructionsText, { marginBottom: 10 }]}>{children}</Text>;
}

const styles = new StyleSheet.create({
  instructionsText: {
    color: Colors.yellow500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});

export default Instructions;
