import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ label, onPress }) => {
  return (
    <View style={styles.AreaBtn}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.txt}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  AreaBtn: {
    padding: 4,
  },
  btn: {
    width: '100%',
  },
  txt: {
    borderRadius: 10,
    textAlign: 'center',
    padding: 19,
    fontFamily: 'DMSans-Bold',
    fontSize: 17,
    color: '#FFFFFF',
    backgroundColor: '#38A69D',
  },
});
