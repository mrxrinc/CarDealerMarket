import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.grey2,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 26,
    marginBottom: 5,
  },
  button: {
    width: '90%',
    marginTop: 23,
    height: 60,
  },
  registrationButton: {
    backgroundColor: colors.yellow1,
  },
  loginButton: {
    backgroundColor: colors.purple1,
  },
});
