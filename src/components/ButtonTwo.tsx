import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const ButtonTwo = ({ label, onPress, disabled = false }) => {
  return (
    <TouchableOpacity style={styles.btn} disabled={disabled} onPress={onPress}>
      <Text style={styles.txt}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTwo;

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 295,
    height: 50,
    borderWidth: 2,
    backgroundColor: colors.primary500,
    borderRadius: 10,
  },
  txt: {
    textAlign: "center",
    fontFamily: "DMSans-Bold",
    fontSize: 17,
    color: "#000000",
  },
});
