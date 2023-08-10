import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    );
}

const styles = new StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        alignItems: "center",
    }
});

export default Card;
