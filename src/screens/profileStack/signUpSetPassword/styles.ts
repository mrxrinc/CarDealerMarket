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
  description: {
    marginTop: 20,
    marginBottom: 45,
    color: colors.purple1,
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  submit: {
    backgroundColor: colors.purple1,
    marginTop: 5,
  },
  submitDisabled: {
    backgroundColor: colors.grey8,
  },
});
