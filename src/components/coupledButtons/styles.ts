import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.purple3,
    height: 53,
    borderRadius: 14,
  },
  button: {
    flex: 0.5,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hasRightBorder: {
    borderRightWidth: 1,
    borderColor: colors.white1,
  },
  title: {
    color: colors.white1,
  },
});
