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
    marginTop: 70,
    marginBottom: 30,
  },
  horizontalInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  smallInput: {
    flex: 0.485,
  },
  priceText: {
    fontSize: 13,
    marginTop: 20,
  },
  input: {
    marginTop: 12,
  },
});
