import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    height: 70,
    width: '100%',
  },
  headerContainer: {
    flex: 1,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.grey6,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
  },
  daysContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: colors.grey6,
    borderBottomWidth: 1,
  },
  dayTitle: {
    color: colors.grey1,
    fontSize: 13,
  },
});
