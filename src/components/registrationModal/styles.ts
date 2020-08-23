import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    // backgroundColor: 'blue',
    paddingHorizontal: 25,
  },
  signInDescription: {
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 17,
  },
  signUpButton: {
    marginTop: 30,
    fontSize: 17,
    color: colors.yellow1,
  },
});
