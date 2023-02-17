import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38A69D',
  },
  containerText: {
    top: -60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontStyle: 'italic',
  },
  Line: {
    width: 300,
    borderWidth: 0.5,
    borderColor: colors.grayScale1,
    marginTop: 15,
  },
  input: {
    top: -10,
    width: 300,
    backgroundColor: '#F9F9FF',
    padding: 5,
    borderRadius: 30,
    margin: 8,
    fontSize: 14,
    fontStyle: 'italic',
    paddingLeft: 20,
  },
  btnIcon: {
    left: 260,
    top: -49,
  },
  inputMask: {
    width: 300,
    backgroundColor: '#F9F9FF',
    padding: 4,
    borderRadius: 30,
    top: -30,
    paddingLeft: 20,
    fontStyle: 'italic',
    margin: 8,
  },
  btnRegister: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#38A69D',
    width: 300,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    top: 50,
    padding: 8,
  },
  txtRegister: {
    color: '#38A69D',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backIcon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    left: 30,
    top: 35,
  },
  error: {
    color: colors.danger600,
    fontFamily: 'DMSans-Medium',
    fontSize: 12,
    padding: 10,
    left: 10,
  },
  alert: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btn: {
    alignSelf: 'center',
  },
});
