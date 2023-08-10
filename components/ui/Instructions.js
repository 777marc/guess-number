import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Instructions({ children }) {
    return <Text style={styles.instructionsText}>{children}</Text>;
}

const styles = new StyleSheet.create({
    instructionsText: {
        color: Colors.yellow500,
        fontSize: "24",
    },
});

export default Instructions;