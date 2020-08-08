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
  title: {
    alignSelf: 'flex-end',
    fontSize: 17,
    marginTop: 45,
    marginBottom: 35,
  },
  submit: {
    backgroundColor: colors.purple1,
    marginTop: 5,
  },
  submitDisabled: {
    backgroundColor: colors.grey8,
  },
});
