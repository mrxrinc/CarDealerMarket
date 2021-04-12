import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 67,
    borderBottomColor: colors.grey1,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 17,
    color: colors.purple1,
    marginRight: 10,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
});
