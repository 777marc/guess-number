import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import PrimaryButton from "../components/ui/PrimaryButton";

function formatStat(stat) {
    return (
        <Text style={styles.statsBold}>{stat}</Text>
    )
}

function GameOverScreen({ reset, userNumber, rounds }) {
    return (
        <View style={styles.container}>
            <Title>The Game is Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/success.png")} />
            </View>
            <Text style={styles.stats}>Your phone needed {formatStat(rounds)} rounds to guess the number {formatStat(userNumber)}.</Text>
            <PrimaryButton onPress={reset}>Start Over</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow500,
        margin: 24,
        padding: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%",
    },
    stats: {
        color: "white",
        fontSize: 24,
        marginBottom: 24,
        textAlign: "center"
    },
    statsBold: {
        color: Colors.yellow500,
        fontSize: 24,
        fontFamily: "open-sans-bold"
    }
})

export default GameOverScreen;
