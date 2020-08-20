import {StyleSheet} from 'react-native';
import colors from 'constants/colors';
import {CALENDAR_WIDTH} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    width: CALENDAR_WIDTH,
    height: 100,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.grey6,
    alignItems: 'center',
    backgroundColor: colors.grey4,
  },
  pricingHeader: {
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  pricingContent: {
    flex: 0.6,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dayStyle: {
    flex: 0.6,
  },
  resultStyle: {
    flex: 1.4,
  },
  pricingText: {
    fontSize: 20,
  },
});
