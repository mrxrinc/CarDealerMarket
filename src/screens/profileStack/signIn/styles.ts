import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '8%',
  },
  logo: {
    marginTop: 20,
    marginBottom: 45,
  },
  submit: {
    backgroundColor: colors.purple1,
    marginTop: 5,
  },
  submitDisabled: {
    backgroundColor: colors.grey8,
  },
  contentContainerShrink: {
    justifyContent: 'center',
  },
  yellowText: {
    marginTop: 20,
    color: colors.yellow1,
  },
});
