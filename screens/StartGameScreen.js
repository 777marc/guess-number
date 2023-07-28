import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>

      <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton width={100}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton width={100}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#733554",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 20,
    textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1
  }

});

export default StartGameScreen;
