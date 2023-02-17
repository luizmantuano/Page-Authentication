import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  containerText: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  txt: {
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.grayScale3,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: '10%',
    paddingEnd: '10%',
  },
});
