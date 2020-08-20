import {StyleSheet} from 'react-native';
import colors from 'constants/colors';
import {CALENDAR_WIDTH} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    height: CALENDAR_WIDTH / 8.5,
    width: CALENDAR_WIDTH / 7.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: CALENDAR_WIDTH / 10,
    height: CALENDAR_WIDTH / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainerSelected: {
    borderRadius: 100,
    backgroundColor: colors.yellow1,
  },
  titleContainerDisabled: {
    borderRadius: 100,
    backgroundColor: colors.grey1,
  },
  title: {
    color: colors.purple1,
  },
  titleSelected: {
    color: colors.white1,
  },
  titleDisabled: {
    color: colors.grey10,
  },
});
