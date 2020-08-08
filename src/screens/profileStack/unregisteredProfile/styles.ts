import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white1,
    alignItems: 'center',
  },
  header: {
    height: 210,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.headerBackground,
    paddingTop: 40,
  },
  contentContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    color: colors.grey2,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
  },
  button: {
    marginTop: 23,
  },
  registrationButton: {
    backgroundColor: colors.yellow1,
  },
  loginButton: {
    backgroundColor: colors.purple1,
  },
});
