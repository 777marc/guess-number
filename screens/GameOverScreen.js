import { Image, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';

function GameOverScreen() {
    return (
        <View style={styles.container}>
            <Title>The Game is Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/success.png")} />
            </View>
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
    }
})

export default GameOverScreen;
