import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 40,
  },
  signUp: {
    color: colors.yellow1,
    marginTop: 35,
    fontSize: 18,
  },
});
