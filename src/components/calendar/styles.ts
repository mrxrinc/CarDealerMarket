import {StyleSheet} from 'react-native';
import colors from 'constants/colors';
import {CALENDAR_WIDTH} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    maxHeight: 300,
    width: CALENDAR_WIDTH,
    borderWidth: 1,
    borderColor: colors.grey7,
    borderRadius: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
