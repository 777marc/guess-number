import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.yellow500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.yellow500,
    padding: 12,
  },
});

export default Title;
