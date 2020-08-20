import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white1,
  },
  centerContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  title: {
    marginBottom: 10,
    marginRight: 15,
  },
  calendarCalculator: {
    marginTop: 40,
    marginBottom: 60,
  },
});
