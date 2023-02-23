import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonTwo = ({ label, onPress, disabled= false}) => {
  return (
    <TouchableOpacity style={styles.btn} disabled={disabled} onPress={onPress}>
      <Text style={styles.txt}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTwo;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 295,
    height: 50,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#38A69D',
    borderRadius: 10,
    top: 50,
  },
  txt: {
    textAlign: 'center',
    fontFamily: 'DMSans-Bold',
    fontSize: 17,
    color: '#FFFFFF',
  },
});
