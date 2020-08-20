import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.purple1,
    fontSize: 25,
    paddingLeft: 10,
  },
  subtitle: {
    fontSize: 11,
    position: 'absolute',
    bottom: -5,
    left: 10,
    color: colors.grey1,
  },
});
