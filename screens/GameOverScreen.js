import { StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';

function GameOverScreen() {
    return (
        <View style={styles.container}>
            <Title>The Game is Over!</Title>
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
})

export default GameOverScreen;
