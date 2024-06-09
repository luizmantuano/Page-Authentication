import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38A69D',
  },
  containerTitle: {
    top: -30,
  },
  Title: {
    fontFamily: 'DMSans-Bold',
    color: colors.white,
    fontSize: 22,
  },
  AreaInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 242,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: '90%',
    height: 55,
    fontFamily: 'DMSans-Regular',
    fontSize: 15,
    color: '#2C2948',
    backgroundColor: '#F9F9FF',
    borderRadius: 25,
    paddingLeft: 39,
    marginTop: 20,
  },
  buttonIcon: {
    alignSelf: 'flex-end',
    paddingRight: 40,
    top: -40,
  },
  ForgetArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Forget: {
    fontSize: 11,
    color: colors.black,
    fontFamily: 'DMSans-Bold',
    textDecorationLine: 'underline',
    top: 30,
    left: 20,
  },
  btnForget: {
    flexDirection: 'row-reverse',
    top: 166,
    right: 10,
    position: 'absolute',
  },
  btnLoginText: {
    textAlign: 'center',
    color: '#38A69D',
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    margin: 5,
  },
  title: {
    textAlign: 'center',
    top: 60,
    right: 43,
    color: colors.white,
    fontFamily: 'DMSans-Regular',
  },
  AreaTextRegister: {
    position: 'relative',
    alignSelf: 'center',
  },
  textRegister: {
    position: 'absolute',
    left: 30,
    fontFamily: 'DMSans-Bold',
    top: 42,
  },
  backIcon: {
    position: 'absolute',
    alignSelf: 'flex-start',
    left: 30,
    top: 35,
  },
});
